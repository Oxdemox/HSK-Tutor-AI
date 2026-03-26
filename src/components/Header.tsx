'use client';

import Link from "next/link";
import { User, LogOut, ChevronDown, LayoutDashboard } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { data: session, isPending } = authClient.useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return (
    <header className="flex items-center justify-between p-4 bg-[#1a1a1a] shadow-md border-b border-[#333] sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform border border-white/10">
          <svg width="18" height="18" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="52" fontSize="46" fontFamily="serif" fontWeight="bold" textAnchor="middle" dominantBaseline="central">中文</text>
          </svg>
        </div>
        <span className="text-xl font-black text-white tracking-tighter">
          HSK Tutor <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent italic">AI</span>
        </span>
      </Link>
      
      <nav className="flex items-center gap-6">
        {session ? (
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-3 px-3 py-1.5 bg-[#252525] hover:bg-[#333] border border-[#444] rounded-lg transition-all group"
            >
              <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden">
                {session.user.image ? (
                  <img src={session.user.image} alt={session.user.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={16} className="text-white" />
                )}
              </div>
              <span className="text-sm font-medium text-gray-200">{session.user.name}</span>
              <ChevronDown size={14} className={`text-gray-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#1f1f1f] border border-[#333] rounded-xl shadow-2xl py-2 z-[60] animate-in fade-in zoom-in duration-200">
                <Link 
                  href="/dashboard" 
                  className="flex items-center gap-2 px-4 py-2 text-sm text-gray-300 hover:bg-[#333] transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  <LayoutDashboard size={14} />
                  Dashboard
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-red-900/10 transition-colors"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          !isPending && (
            <div className="flex items-center gap-3">
              <Link href="/sign-in" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                Log In
              </Link>
              <Link href="/sign-up" className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-all shadow-lg hover:shadow-blue-500/20">
                Join Now
              </Link>
            </div>
          )
        )}
      </nav>
    </header>
  );
}
