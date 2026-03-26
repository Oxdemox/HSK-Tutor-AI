'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { Mail, Lock, User, Loader2, Fingerprint, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { data, error } = await authClient.signUp.email({
        email,
        password,
        name,
        callbackURL: '/dashboard',
      });
      
      if (error) {
        setError(error.message || 'Failed to create account');
      } else {
        setSuccess(true);
      }
    } catch (err: any) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handlePasskeySignUp = async () => {
    setLoading(true);
    setError('');
    try {
        const { error } = await authClient.signUp.passkey({
            name,
            email,
        });
        if (error) setError(error.message || 'Passkey enrollment failed');
    } catch (err) {
        setError('Passkey operation failed or was cancelled');
    } finally {
        setLoading(false);
    }
  };

  if (success) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
            <Card className="w-full max-w-md p-10 bg-[#1a1a1a] border-[#333] shadow-2xl text-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                    <CheckCircle2 className="text-green-500 w-10 h-10" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-4">Enrollment Sent</h1>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    We've sent a verification link to <span className="text-white font-bold">{email}</span>. 
                    Please confirm your identity to complete your registration.
                </p>
                <Link href="/sign-in" className="inline-block w-full">
                    <Button variant="secondary" className="w-full py-4 text-gray-300 border-[#333]">
                        Back to Login
                    </Button>
                </Link>
            </Card>
        </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-md p-8 bg-[#1a1a1a] border-[#333] shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30 font-bold text-blue-500">
            <User size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-400 text-sm">Join the Elite Mandarin Cohort</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                required
                className="w-full bg-[#121212] border border-[#333] rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Scholar Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                required
                className="w-full bg-[#121212] border border-[#333] rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="you@hsk-tutor.ai"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="password"
                required
                className="w-full bg-[#121212] border border-[#333] rounded-xl py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Select secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl shadow-blue-500/10 transition-all disabled:opacity-50"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Complete Enrollment'}
          </Button>
        </form>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#333]"></div>
          </div>
          <div className="relative flex justify-center text-[10px] uppercase font-bold tracking-[0.2em]">
            <span className="px-4 bg-[#1a1a1a] text-gray-600 italic">Advanced Hardware</span>
          </div>
        </div>

        <button
          onClick={handlePasskeySignUp}
          disabled={loading || !name || !email}
          className="w-full flex items-center justify-center gap-3 py-4 px-4 bg-white/5 border border-[#333] hover:bg-blue-600/10 hover:border-blue-500/50 text-white rounded-xl transition-all group disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Fingerprint className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
          <span className="font-bold">Fast-Track with Passkey</span>
        </button>

        <p className="mt-10 text-center text-gray-500 text-xs font-medium">
          Already a scholar?{' '}
          <Link href="/sign-in" className="text-blue-500 hover:underline font-bold">Resort to Log in</Link>
        </p>
      </Card>
    </div>
  );
}
