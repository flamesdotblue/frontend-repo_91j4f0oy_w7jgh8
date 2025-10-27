import { Rocket, Shield, Sparkles, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: Sparkles,
    title: "Glassmorphic UI",
    desc: "Frosted panes, soft glows, and subtle depth for an elegant feel.",
    color: "from-fuchsia-500/30 to-violet-500/30",
  },
  {
    icon: Cpu,
    title: "AI-ready",
    desc: "Plug into any model server. This demo ships with a smart local assistant.",
    color: "from-cyan-500/30 to-blue-500/30",
  },
  {
    icon: Shield,
    title: "Secure by design",
    desc: "Built with best practices in mind for privacy and safety.",
    color: "from-emerald-500/30 to-teal-500/30",
  },
  {
    icon: Rocket,
    title: "Fast & responsive",
    desc: "Optimized for performance with smooth animations and detail.",
    color: "from-amber-500/30 to-orange-500/30",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-white">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Designed for delight</h2>
        <p className="mt-4 text-white/80">
          Thoughtful interactions, tactile surfaces, and an expressive visual language.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
          >
            <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`} />
            <div className="relative z-10 flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-white/80">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
