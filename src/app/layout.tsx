import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CG Academy | 90-Day AI Mastery",
  description: "Brandon Ronning's 90-Day AI Mastery Plan. Built by Common Ground.",
  openGraph: {
    title: "CG Academy | 90-Day AI Mastery",
    description: "From zero to certified in 90 days. No degree required.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--cg-white)]/95 backdrop-blur-sm">
          <div className="flex justify-between items-center px-8 sm:px-12 md:px-16 py-5 border-b border-[var(--cg-gray-100)]">
            <a href="/" className="flex items-center gap-3">
              <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--cg-black)]">
                CG ACADEMY
              </span>
              <span className="text-[10px] font-medium text-[var(--cg-gray-300)] tracking-wider uppercase hidden sm:inline">
                90-Day AI Mastery
              </span>
            </a>
            <nav className="flex items-center gap-6">
              <a
                href="/dashboard"
                className="text-[11px] font-medium tracking-[0.05em] uppercase text-[var(--cg-gray-500)] hover:text-[var(--cg-black)] transition-colors"
              >
                Dashboard
              </a>
              <a
                href="/curriculum"
                className="text-[11px] font-medium tracking-[0.05em] uppercase text-[var(--cg-gray-500)] hover:text-[var(--cg-black)] transition-colors"
              >
                Curriculum
              </a>
            </nav>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 pt-[65px]">{children}</main>

        {/* Footer */}
        <footer className="border-t border-[var(--cg-gray-100)] px-8 sm:px-12 md:px-16 py-10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--cg-gray-500)]">
                Common Ground
              </span>
              <span className="text-[9px] text-[var(--cg-gray-300)]">
                commonground.ventures
              </span>
            </div>
            <span className="text-[8px] text-[var(--cg-gray-300)] tracking-wider">
              Branded by Lip Loi Creative &nbsp;|&nbsp; Enhanced by APEXX AI
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
