import { motion } from "framer-motion";
import { Check, Lock, Unlock } from "lucide-react";

const weeks = [
  { label: "Semana 1", icon: Check },
  { label: "Semana 2", icon: Check },
  { label: "Semana 3", icon: Check },
  { label: "Semana 4", icon: Unlock },
];

const StreakTimeline = () => {
  return (
    <section className="bg-secondary/50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="mb-2 font-display text-2xl font-bold text-foreground md:text-3xl">
            Cómo funciona la racha
          </h2>
          <p className="text-muted-foreground">
            Mantén actividad durante 4 semanas consecutivas para completar tu racha.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto flex max-w-lg items-center justify-between">
          {/* Connecting line */}
          <div className="absolute left-6 right-6 top-1/2 h-1 -translate-y-1/2 rounded-full bg-border md:left-8 md:right-8" />
          <motion.div
            className="absolute left-6 top-1/2 h-1 -translate-y-1/2 rounded-full bg-primary md:left-8"
            initial={{ width: 0 }}
            whileInView={{ width: "calc(100% - 3rem)" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          />

          {weeks.map((week, i) => (
            <motion.div
              key={week.label}
              className="relative z-10 flex flex-col items-center gap-2"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.4 }}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14 ${
                  i === 3
                    ? "animate-pulse-glow border-accent bg-accent text-accent-foreground"
                    : "border-primary bg-primary text-primary-foreground"
                }`}
              >
                <week.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-semibold text-foreground md:text-sm">{week.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2 }}
          className="mt-10 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-welli-yellow-soft px-5 py-3 text-sm font-bold text-accent-foreground">
            <Lock className="h-4 w-4 text-accent" />
            🔓 Al completar la racha activas el multiplicador{" "}
            <span className="text-accent">x1.5</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StreakTimeline;
