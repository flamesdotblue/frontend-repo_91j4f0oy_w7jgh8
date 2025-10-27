import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0b12] text-white">
      {/* Decorative background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-[-10%] h-[50vh] w-[80vw] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-600/10 via-indigo-600/10 to-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/3 h-[40vh] w-[60vw] -translate-x-1/2 rounded-full bg-gradient-to-tr from-emerald-500/10 via-teal-500/10 to-blue-600/10 blur-3xl" />
      </div>

      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <Chatbot />
      </main>

      <footer id="about" className="relative z-10 border-t border-white/10/5 py-10">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-white/60">
          Built with love and glass. Try the chat above and imagine your model plugged in.
        </div>
      </footer>
    </div>
  );
}
