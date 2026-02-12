"use client";

import { motion } from "framer-motion";
import { FileText, DollarSign, Trophy } from "lucide-react";
import { useState } from "react";

const ExampleCard = () => {
  const [applications, setApplications] = useState(20);
  const [disbursements, setDisbursements] = useState(3);

  const applicationsPoints = applications * 1;
  const disbursementsPoints = disbursements * 10;
  const totalPoints = Math.min(applicationsPoints + disbursementsPoints, 100);
  const totalWithStreak = Math.min(Math.round(totalPoints * 1.5), 100);
  const moneyValue = totalPoints * 2000;
  const moneyValueWithStreak = totalWithStreak * 2000;

  return (
    <section className="bg-secondary/50 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <h2 className="mb-2 font-display text-2xl font-bold text-foreground md:text-3xl">
            Simulador de Welli puntos
          </h2>
          <p className="text-muted-foreground">Calcula cuántos Welli puntos puedes ganar</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
        >
          {/* Input rows */}
          <div className="divide-y divide-border p-6">
            <div className="flex items-center justify-between pb-4">
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">Aplicaciones (1 pt c/u)</span>
              </div>
              <input
                type="number"
                min="0"
                value={applications}
                onChange={(e) => setApplications(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-20 rounded-lg border border-border bg-secondary px-3 py-2 text-right font-display font-bold text-foreground"
              />
            </div>

            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <DollarSign className="h-5 w-5 text-welli-green" />
                <span className="text-sm text-foreground">Desembolsos (10 pts c/u)</span>
              </div>
              <input
                type="number"
                min="0"
                value={disbursements}
                onChange={(e) => setDisbursements(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-20 rounded-lg border border-border bg-secondary px-3 py-2 text-right font-display font-bold text-foreground"
              />
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">Total de Welli puntos</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">{totalPoints} pts</span>
            </div>
          </div>

          {/* Summary result */}
          <div className="bg-hero px-6 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-accent" />
                <div>
                  <span className="text-sm font-semibold text-primary-foreground block">
                    Resumen
                  </span>
                  <span className="text-xs text-primary-foreground/70">
                    Con racha x1.5
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-primary-foreground/60">Sin racha</div>
                <div className="font-display text-lg font-bold text-primary-foreground mb-2">
                  {totalPoints} <span className="text-sm font-medium text-primary-foreground/70">/ 100 pts</span>
                </div>
                <div className="text-sm font-bold text-primary-foreground/80 bg-primary-foreground/10 rounded-lg px-3 py-2 mb-3">
                  ${moneyValue.toLocaleString('es-CO')}
                </div>
                <div className="text-xs text-primary-foreground/60">Con racha</div>
                <div className="font-display text-2xl font-extrabold text-accent">
                  {totalWithStreak} <span className="text-sm font-medium text-primary-foreground/70">/ 100 pts</span>
                </div>
                <div className="text-base font-extrabold text-accent bg-accent/20 rounded-lg px-3 py-2">
                  ${moneyValueWithStreak.toLocaleString('es-CO')}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExampleCard;
