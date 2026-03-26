import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Mail, Save, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
  userId: string;
  onBack: () => void;
};

export default function ProfileView({ userId, onBack }: Props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [smartHskEnabled, setSmartHskEnabled] = useState(false);

  useEffect(() => {
    // Firebase is disabled - load profile from local storage or use defaults
    const storedProfile = localStorage.getItem(`profile_${userId}`);
    if (storedProfile) {
      const data = JSON.parse(storedProfile);
      setName(data.name || '');
      setEmail(data.email || '');
      setSmartHskEnabled(data.smartHskEnabled || false);
    }
    setIsLoading(false);
  }, [userId]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setMessage(null);
    try {
      // Firebase is disabled - save to localStorage
      localStorage.setItem(`profile_${userId}`, JSON.stringify({
        name,
        email,
        smartHskEnabled,
      }));
      setMessage({ type: 'success', text: 'Profile updated successfully.' });
    } catch (err: any) {
      console.error("Error updating profile:", err);
      setMessage({ type: 'error', text: err.message || 'Failed to update profile.' });
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#f5f5f0] flex items-center justify-center">
        <Loader2 size={40} className="animate-spin text-red-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-primary text-text-primary font-sans flex flex-col h-screen">
      <header className="bg-white border-b border-surface-sunken py-4 px-6 shadow-sm z-10">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 -ml-2 text-text-tertiary hover:text-text-primary hover:bg-surface-sunken rounded-full transition-colors"
            title="Back to menu"
          >
            <ArrowLeft size={24} />
          </button>
          <div className="flex items-center gap-2">
            <User className="text-accent-primary" size={20} />
            <h1 className="text-xl font-bold text-text-primary tracking-tight">My Profile</h1>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-4xl shadow-sm border border-surface-sunken p-6 md:p-8">
            
            {message && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-2xl text-sm flex items-start gap-3 ${
                  message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'
                }`}
              >
                {message.type === 'success' ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : <AlertCircle size={18} className="shrink-0 mt-0.5" />}
                <p className="font-medium">{message.text}</p>
              </motion.div>
            )}

            <form onSubmit={handleSave} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-tertiary uppercase tracking-widest ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-tertiary" size={18} />
                  <input 
                    type="email"
                    disabled
                    value={email}
                    className="w-full bg-surface-sunken border border-surface-sunken rounded-2xl py-3.5 pl-12 pr-4 outline-none text-text-tertiary font-medium cursor-not-allowed"
                    title="Email cannot be changed"
                  />
                </div>
                <p className="text-xs text-text-tertiary ml-1">Email cannot be changed.</p>
              </div>

              <div className="space-y-4 pt-4 border-t border-surface-sunken">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-text-primary">Smart-HSK Adaptive Difficulty</label>
                    <p className="text-xs text-text-tertiary">
                      The AI will dynamically increase or decrease its linguistic complexity based on your performance.
                      <span className="block mt-1 text-accent-primary font-bold">(Experimental)</span>
                    </p>
                  </div>
                  <button 
                    type="button"
                    onClick={() => setSmartHskEnabled(!smartHskEnabled)}
                    className={`w-12 h-6 rounded-full transition-colors relative flex items-center px-1 shrink-0 ${smartHskEnabled ? 'bg-emerald-500' : 'bg-stone-300'}`}
                  >
                    <motion.div 
                      animate={{ x: smartHskEnabled ? 24 : 0 }}
                      className="w-4 h-4 bg-white rounded-full shadow-sm"
                    />
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSaving}
                  type="submit"
                  className="w-full bg-text-primary text-white rounded-2xl py-3.5 font-bold shadow-lg shadow-text-primary/10 hover:bg-text-secondary transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSaving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                  <span>Save Changes</span>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
