import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const ClosingCTA = () => {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
            <Rocket className="h-7 w-7 text-primary" />
          </div>

          <h2 className="mb-6 font-display text-2xl font-bold leading-relaxed text-foreground md:text-3xl">
            Empieza hoy.
            <br />
            Mantén tu racha.
            <br />
            <span className="text-primary">Haz que tus Welli puntos valgan más.</span>
          </h2>

          <p className="text-sm text-muted-foreground">
             Camino del Éxito Welli
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingCTA;
