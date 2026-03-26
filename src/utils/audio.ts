export class AudioRecorder {
  private stream: MediaStream | null = null;
  private audioContext: AudioContext | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private processor: ScriptProcessorNode | null = null;
  private onData: (base64Data: string) => void;
  private onVolumeChange?: (volume: number, isSpeaking: boolean) => void;

  // VAD parameters
  private silenceDelay = 600; // ms of silence before considering stopped
  private minSpeechDuration = 100; // ms of continuous sound before considering started
  private lastSpeechTime = 0;
  private speechStartTime = 0;
  private isSpeaking = false;
  
  // Adaptive noise floor
  private noiseFloor = 0.01;

  constructor(
    onData: (base64Data: string) => void, 
    onVolumeChange?: (volume: number, isSpeaking: boolean) => void
  ) {
    this.onData = onData;
    this.onVolumeChange = onVolumeChange;
  }

  async start() {
    try {
      // Fine-tuned audio constraints for clearer voice capture
      this.stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
          channelCount: 1,
          sampleRate: 16000,
        } 
      });
      
      this.audioContext = new AudioContext({ sampleRate: 16000 });
      this.source = this.audioContext.createMediaStreamSource(this.stream);
      this.processor = this.audioContext.createScriptProcessor(4096, 1, 1);

      this.processor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        
        // Calculate RMS (Root Mean Square) for Voice Activity Detection
        let sumSquares = 0;
        for (let i = 0; i < inputData.length; i++) {
          sumSquares += inputData[i] * inputData[i];
        }
        const rms = Math.sqrt(sumSquares / inputData.length);
        
        // Update noise floor (slowly adapt to background noise)
        if (rms < this.noiseFloor) {
          this.noiseFloor = rms; // Quick adapt downwards
        } else if (!this.isSpeaking) {
          this.noiseFloor = this.noiseFloor * 0.999 + rms * 0.001; // Slow adapt upwards only when not speaking
        }

        // Dynamic threshold: at least 0.005, or 3x the noise floor
        const dynamicThreshold = Math.max(0.005, this.noiseFloor * 3);
        
        const now = Date.now();
        if (rms > dynamicThreshold) {
          if (this.speechStartTime === 0) {
            this.speechStartTime = now;
          }
          this.lastSpeechTime = now;
          
          // Require a minimum duration of sound to trigger "speaking" (filters out clicks/pops)
          if (!this.isSpeaking && now - this.speechStartTime > this.minSpeechDuration) {
            this.isSpeaking = true;
          }
        } else {
          this.speechStartTime = 0; // Reset speech start timer if it drops below threshold
          
          if (this.isSpeaking && now - this.lastSpeechTime > this.silenceDelay) {
            this.isSpeaking = false;
          }
        }

        if (this.onVolumeChange) {
          this.onVolumeChange(rms, this.isSpeaking);
        }

        // Only send audio data if the user is speaking, or shortly after they stop
        // This prevents background noise from being sent continuously
        if (this.isSpeaking || now - this.lastSpeechTime < this.silenceDelay + 500) {
          const pcm16 = new Int16Array(inputData.length);
          for (let i = 0; i < inputData.length; i++) {
            let s = Math.max(-1, Math.min(1, inputData[i]));
            pcm16[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
          }
          
          // Convert to base64
          const buffer = new ArrayBuffer(pcm16.length * 2);
          const view = new DataView(buffer);
          for (let i = 0; i < pcm16.length; i++) {
            view.setInt16(i * 2, pcm16[i], true); // true for little-endian
          }
          
          let binary = '';
          const bytes = new Uint8Array(buffer);
          for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          const base64 = btoa(binary);
          this.onData(base64);
        }
      };

      this.source.connect(this.processor);
      this.processor.connect(this.audioContext.destination);
    } catch (err) {
      console.error("Error starting audio recorder:", err);
      throw err;
    }
  }

  stop() {
    if (this.processor) {
      this.processor.disconnect();
      this.processor = null;
    }
    if (this.source) {
      this.source.disconnect();
      this.source = null;
    }
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    this.isSpeaking = false;
    if (this.onVolumeChange) {
      this.onVolumeChange(0, false);
    }
  }
}

export class AudioPlayer {
  private audioContext: AudioContext;
  private nextTime: number = 0;
  private sources: AudioBufferSourceNode[] = [];
  private onPlayStateChange?: (isPlaying: boolean) => void;

  constructor(onPlayStateChange?: (isPlaying: boolean) => void) {
    this.audioContext = new AudioContext({ sampleRate: 24000 });
    this.onPlayStateChange = onPlayStateChange;
  }

  async play(base64Data: string) {
    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }

    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    
    const pcm16 = new Int16Array(bytes.buffer);
    const audioBuffer = this.audioContext.createBuffer(1, pcm16.length, 24000);
    const channelData = audioBuffer.getChannelData(0);
    
    for (let i = 0; i < pcm16.length; i++) {
      channelData[i] = pcm16[i] / 32768.0;
    }

    const source = this.audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(this.audioContext.destination);

    const currentTime = this.audioContext.currentTime;
    if (this.nextTime < currentTime) {
      this.nextTime = currentTime;
    }
    
    source.start(this.nextTime);
    this.nextTime += audioBuffer.duration;
    this.sources.push(source);
    
    if (this.sources.length === 1 && this.onPlayStateChange) {
      this.onPlayStateChange(true);
    }
    
    source.onended = () => {
      this.sources = this.sources.filter(s => s !== source);
      if (this.sources.length === 0 && this.onPlayStateChange) {
        this.onPlayStateChange(false);
      }
    };
  }

  stop() {
    this.sources.forEach(source => {
      try {
        source.stop();
      } catch (e) {
        // Ignore errors if already stopped
      }
    });
    this.sources = [];
    this.nextTime = 0;
    if (this.onPlayStateChange) {
      this.onPlayStateChange(false);
    }
  }
}
