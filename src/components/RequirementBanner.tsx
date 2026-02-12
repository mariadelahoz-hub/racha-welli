import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const RequirementBanner = () => {
  return (
    <section className="px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-4 rounded-2xl border border-accent/30 bg-welli-yellow-soft p-5 md:p-6"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/20">
            <AlertTriangle className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-accent-foreground">
              ⚠️ Requisito obligatorio
            </h3>
            <p className="mt-1 text-sm text-accent-foreground/80">
              Para poder canjear Welli puntos, debes tener al menos{" "}
              <strong>1 desembolso</strong> durante el periodo de 4 semanas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RequirementBanner;
