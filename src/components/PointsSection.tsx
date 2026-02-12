import { motion } from "framer-motion";
import { FileText, DollarSign } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PointsSection = () => {
  return (
    <section className="px-4 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-2 font-display text-2xl font-bold text-foreground md:text-3xl">
            Cómo ganas Welli puntos
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            variants={item}
            className="shadow-card group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-card-hover"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <div className="font-display text-3xl font-extrabold text-foreground">1 Welli punto</div>
            <p className="mt-1 text-muted-foreground">por cada aplicación</p>
          </motion.div>

          <motion.div
            variants={item}
            className="shadow-card group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-card-hover"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-welli-green-soft">
              <DollarSign className="h-6 w-6 text-welli-green" />
            </div>
            <div className="font-display text-3xl font-extrabold text-foreground">10 Welli puntos</div>
            <p className="mt-1 text-muted-foreground">por cada desembolso</p>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          Mientras más desembolsos, más rápido crecen tus Welli puntos.
        </motion.p>
      </div>
    </section>
  );
};

export default PointsSection;
