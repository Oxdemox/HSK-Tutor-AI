'use client';

import { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Link from 'next/link';
import { Mail, Lock, User, Loader2, Apple, Chrome, Linkedin, Monitor, Globe } from 'lucide-react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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
      }
    } catch (err: any) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = async (provider: 'google' | 'apple' | 'microsoft' | 'linkedin') => {
    await authClient.signIn.social({
      provider,
      callbackURL: '/dashboard',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <Card className="w-full max-w-md p-8 bg-[#1a1a1a] border-[#333] shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-gray-400">Join the elite Mandarin learning community</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-lg text-red-200 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="text"
                required
                className="w-full bg-[#121212] border border-[#333] rounded-lg py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="email"
                required
                className="w-full bg-[#121212] border border-[#333] rounded-lg py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input
                type="password"
                required
                className="w-full bg-[#121212] border border-[#333] rounded-lg py-3 pl-11 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                placeholder="Select a secure password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg hover:shadow-blue-500/20 transition-all disabled:opacity-50"
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Get Started'}
          </Button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#333]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#1a1a1a] text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => handleSocialSignIn('google')}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 border border-[#333] hover:bg-white/10 text-white rounded-lg transition-all"
          >
            <Chrome className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button
            onClick={() => handleSocialSignIn('apple')}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 border border-[#333] hover:bg-white/10 text-white rounded-lg transition-all"
          >
            <Apple className="w-5 h-5" />
            <span>Apple</span>
          </button>
          <button
            onClick={() => handleSocialSignIn('microsoft')}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 border border-[#333] hover:bg-white/10 text-white rounded-lg transition-all"
          >
            <Monitor className="w-5 h-5" />
            <span>Microsoft</span>
          </button>
          <button
            onClick={() => handleSocialSignIn('linkedin')}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 border border-[#333] hover:bg-white/10 text-white rounded-lg transition-all"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </button>
          <button
            onClick={() => alert('WeChat login is currently in preview. Please check documentation for setup.')}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-green-900/20 border border-green-500/30 hover:bg-green-900/30 text-green-400 rounded-lg transition-all"
          >
            <Globe className="w-5 h-5" />
            <span>WeChat</span>
          </button>
        </div>

        <p className="mt-8 text-center text-gray-400 text-sm">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-blue-500 hover:underline font-medium">Log in</Link>
        </p>
      </Card>
    </div>
  );
}
