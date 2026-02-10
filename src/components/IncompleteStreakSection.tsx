import { motion } from "framer-motion";
import { Info, ArrowRight } from "lucide-react";

const bullets = [
  "Tus puntos se siguen acumulando",
  "No se activa el multiplicador",
];

const IncompleteStreakSection = () => {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary">
              <Info className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">
              ¿Qué pasa si no completas la racha?
            </h2>
          </div>

          <p className="mb-4 text-sm text-muted-foreground">Si no completas la racha:</p>

          <ul className="mb-6 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                {b}
              </li>
            ))}
          </ul>

        </motion.div>
      </div>
    </section>
  );
};

export default IncompleteStreakSection;
