import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const MultiplierCard = () => {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-hero p-8 md:p-10"
        >
          {/* Glow decoration */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
              <Zap className="h-4 w-4" />
              Multiplicador de Racha
            </div>

            <h2 className="mb-2 font-display text-3xl font-extrabold text-primary-foreground md:text-4xl">
              x1.5
            </h2>
            <p className="mb-8 text-primary-foreground/80">
              Completa 4 semanas consecutivas y todos tus Welli puntos se multiplican por 1.5
            </p>

            {/* Visual example */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <div className="rounded-2xl bg-primary-foreground/10 px-6 py-4 text-center backdrop-blur-sm">
                <div className="text-sm text-primary-foreground/60">Welli puntos base</div>
                <div className="font-display text-3xl font-extrabold text-primary-foreground">40</div>
              </div>

              <ArrowRight className="h-6 w-6 rotate-90 text-accent sm:rotate-0" />

              <div className="animate-pulse-glow rounded-2xl bg-accent/20 px-6 py-4 text-center backdrop-blur-sm ring-2 ring-accent/40">
                <div className="text-sm text-accent">Welli puntos canjeables</div>
                <div className="font-display text-3xl font-extrabold text-primary-foreground">60</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MultiplierCard;
