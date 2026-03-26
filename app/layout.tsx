import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSK Tutor",
  description: "Modern Chinese Language Learning Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
