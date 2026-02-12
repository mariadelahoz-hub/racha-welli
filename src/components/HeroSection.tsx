import { motion } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";
import welliLogo from "@/assets/welli-logo.webp";

const HeroSection = () => {
  return (
    <section className="bg-hero relative overflow-hidden px-4 py-16 md:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-56 w-56 rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={welliLogo} alt="Welli" className="mx-auto mb-6 h-12 md:h-14" />


          <h1 className="mb-4 font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Camino del Éxito Welli
          </h1>

          <p className="mb-8 text-lg text-primary-foreground/80 md:text-xl">
            Obtén 5 Welli puntos por desembolso y desbloquea mejores premios.
          </p>

          <motion.div
            className="inline-flex items-center gap-3 rounded-2xl bg-primary-foreground/15 px-6 py-4 backdrop-blur-sm"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <TrendingUp className="h-6 w-6 text-accent" />
            <span className="font-display text-base font-bold text-primary-foreground md:text-lg">
              Mantén tu racha activa y multiplica tus Welli puntos{" "}
              <span className="text-accent">x1.5</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
