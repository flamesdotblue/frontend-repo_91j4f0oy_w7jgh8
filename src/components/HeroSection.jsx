import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden pt-24" aria-labelledby="hero-title">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient overlay to enhance contrast, but keep it non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.4),rgba(0,0,0,0.7))]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center text-white">
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-20 bg-gradient-to-br from-white via-violet-100 to-fuchsia-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          A glassmorphic AI chat that feels alive
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-2xl text-balance text-base text-white/80 sm:text-lg"
        >
          Talk to an elegant assistant inside a floating glass interface. Smooth, modern, and ready to help.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#chat"
            className="rounded-xl bg-white/15 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
          >
            Start chatting
          </a>
          <a
            href="#features"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore features
          </a>
        </motion.div>
      </div>
    </section>
  );
}
