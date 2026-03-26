'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { Mail, Lock, Loader2, Key, ShieldCheck, MailQuestion, Fingerprint } from 'lucide-react';

type AuthMethod = 'password' | 'otp' | 'magic-link';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [method, setMethod] = useState<AuthMethod>('password');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    
    try {
      if (method === 'password') {
        const { error } = await authClient.signIn.email({
          email,
          password,
          callbackURL: '/dashboard',
        });
        if (error) setError(error.message || 'Failed to sign in');
      } else if (method === 'magic-link') {
        const { error } = await authClient.signIn.magicLink({
          email,
          callbackURL: '/dashboard',
        });
        if (error) {
            setError(error.message || 'Failed to send magic link');
        } else {
            setMessage('Magic link sent! Please check your inbox.');
        }
      } else if (method === 'otp') {
        if (!showOtpInput) {
            const { error } = await authClient.emailOtp.sendVerificationOtp({
                email,
                type: 'sign-in'
            });
            if (error) {
                setError(error.message || 'Failed to send code');
            } else {
                setShowOtpInput(true);
                setMessage('Verification code sent to your email.');
            }
        } else {
            const { error } = await authClient.signIn.emailOtp({
                email,
                otp: otp,
                callbackURL: '/dashboard'
            });
            if (error) setError(error.message || 'Invalid code');
        }
      }
    } catch (err: any) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handlePasskeySignIn = async () => {
    setLoading(true);
    setError('');
    try {
        const { error } = await authClient.signIn.passkey();
        if (error) setError(error.message || 'Passkey authentication failed');
    } catch (err) {
        setError('Passkey not found or cancelled');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-md p-8 bg-[#1a1a1a] border-[#333] shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
            <ShieldCheck className="text-blue-500 w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Secure Entry</h1>
          <p className="text-gray-400 text-sm">Official Scholar Authentication</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-sm flex items-center gap-2">
            <MailQuestion size={16} />
            {error}
          </div>
        )}

        {message && (
          <div className="mb-6 p-4 bg-green-900/30 border border-green-500/50 rounded-lg text-green-200 text-sm flex items-center gap-2">
            <Mail size={16} />
            {message}
          </div>
        )}

        <div className="flex gap-2 p-1 bg-[#121212] border border-[#333] rounded-xl mb-8">
            {(['password', 'otp', 'magic-link'] as AuthMethod[]).map((m) => (
                <button
                    key={m}
                    onClick={() => { setMethod(m); setShowOtpInput(false); setError(''); setMessage(''); }}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${method === m ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
                >
                    {m.replace('-', ' ').toUpperCase()}
                </button>
            ))}
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Identity</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                required
                disabled={showOtpInput}
                className="w-full bg-[#121212] border border-[#333] rounded-lg py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all disabled:opacity-50"
                placeholder="you@hsk-tutor.ai"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {method === 'password' && (
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Credential</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="password"
                  required
                  className="w-full bg-[#121212] border border-[#333] rounded-lg py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          )}

          {method === 'otp' && showOtpInput && (
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Verification Code</label>
              <div className="relative">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  required
                  className="w-full bg-[#121212] border border-[#333] rounded-lg py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-center tracking-[0.5em] font-bold text-xl"
                  placeholder="000000"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-500/10 transition-all disabled:opacity-50"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : (
                method === 'magic-link' ? 'Send Link' : 
                (method === 'otp' && !showOtpInput ? 'Request Code' : 'Authorize Session')
            )}
          </Button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#333]"></div>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-[0.2em]">
            <span className="px-4 bg-[#1a1a1a] text-gray-600 italic">Biometric Vault</span>
          </div>
        </div>

        <button
          onClick={handlePasskeySignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-4 px-4 bg-white/5 border border-[#333] hover:bg-blue-600/10 hover:border-blue-500/50 text-white rounded-xl transition-all group disabled:opacity-50"
        >
          <Fingerprint className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
          <span className="font-bold">Sign in with Passkey</span>
        </button>

        <p className="mt-10 text-center text-gray-500 text-xs font-medium">
          New scholar?{' '}
          <Link href="/sign-up" className="text-blue-500 hover:underline font-bold">Enroll in the Cohort</Link>
        </p>
      </Card>
    </div>
  );
}
