import { motion } from "framer-motion";
import { Gift, Star, ShoppingBag, Trophy, Flame, Target } from "lucide-react";

const unlockItems = [
  { icon: Star, text: "Activar el multiplicador x1.5" },
  { icon: Gift, text: "Desbloquear el canje de puntos" },
  { icon: ShoppingBag, text: "Acceder al catálogo de premios" },
];

const prizes = [
  { points: 10, prize: "$20.000", emoji: "🥉", label: "Bronce" },
  { points: 25, prize: "$50.000", emoji: "🥈", label: "Plata" },
  { points: 50, prize: "$100.000", emoji: "🥇", label: "Oro" },
  { points: 100, prize: "$200.000", emoji: "💎", label: "Diamante" },
];

const MAX_POINTS = 100;

const RewardsSection = () => {
  return (
    <section className="bg-secondary/50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        {/* Catálogo de Premios - Ahora primero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-2 text-sm font-bold text-accent-foreground">
            <Flame className="h-4 w-4 text-accent" />
            ¡Desbloquea recompensas!
          </div>
          <h2 className="mb-1 font-display text-2xl font-bold text-foreground md:text-3xl">
            🎁 Catálogo de Premios
          </h2>
          <p className="text-sm text-muted-foreground">Acumula puntos y canjea premios reales</p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-8 rounded-2xl border border-border bg-card p-5 shadow-card"
        >
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Tu progreso</span>
            </div>
            <span className="font-display text-sm font-bold text-muted-foreground">
              Máx. <span className="text-primary">{MAX_POINTS} pts</span>
            </span>
          </div>

          {/* Bar background */}
          <div className="relative h-5 overflow-hidden rounded-full bg-secondary">
            {/* Prize milestone markers */}
            {prizes.map((p) => (
              <div
                key={p.points}
                className="absolute top-0 h-full w-px bg-border"
                style={{ left: `${(p.points / MAX_POINTS) * 100}%` }}
              />
            ))}
            {/* Animated fill - example at 0 to show empty state */}
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-hero"
              initial={{ width: 0 }}
              whileInView={{ width: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          {/* Milestone labels */}
          <div className="relative mt-2 h-6">
            {prizes.map((p) => (
              <div
                key={p.points}
                className="absolute flex flex-col items-center"
                style={{ left: `${(p.points / MAX_POINTS) * 100}%`, transform: "translateX(-50%)" }}
              >
                <span className="text-[10px] font-bold text-muted-foreground">{p.points}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Prize cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {prizes.map((p, i) => (
            <motion.div
              key={p.points}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className={`shadow-card relative cursor-default overflow-hidden rounded-2xl border border-border bg-card p-5 text-center transition-shadow hover:shadow-card-hover ${
                i === 3 ? "ring-2 ring-accent/50" : ""
              }`}
            >
              {i === 3 && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-accent px-2 py-0.5 text-[10px] font-bold text-accent-foreground">
                  MAX
                </div>
              )}
              <div className="mb-2 text-2xl">{p.emoji}</div>
              <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                {p.label}
              </div>
              <div className="font-display text-lg font-extrabold text-foreground">
                {p.points} <span className="text-xs font-medium text-muted-foreground">pts</span>
              </div>
              <div className="mt-1 font-display text-base font-bold text-primary">{p.prize}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
