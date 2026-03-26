'use client';

import Link from "next/link";
import { User } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-surface-elevated shadow-sm border-b border-surface-sunken">
      <Link href="/" className="text-xl font-bold text-accent-primary">HSK Tutor</Link>
      <nav className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-surface-sunken rounded-lg">
          <User size={18} className="text-text-secondary" />
          <span className="text-sm font-medium text-text-primary">Guest</span>
        </div>
      </nav>
    </header>
  );
}
