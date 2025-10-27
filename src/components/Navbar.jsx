import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-500/80 to-fuchsia-500/80 text-white shadow-lg shadow-fuchsia-500/20">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">GlassChat AI</span>
            </div>
            <div className="hidden gap-6 sm:flex">
              <a href="#features" className="text-sm text-white/80 transition hover:text-white">Features</a>
              <a href="#chat" className="text-sm text-white/80 transition hover:text-white">Try the Chat</a>
              <a href="#about" className="text-sm text-white/80 transition hover:text-white">About</a>
            </div>
            <a
              href="#chat"
              className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              Launch
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
