import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const terms = [
  "El multiplicador x1.5 solo aplica si se completa la racha.",
  "Se requiere al menos un (1) desembolso durante el periodo para habilitar el canje.",
  "Welli se reserva el derecho de validar la información antes de redimir premios.",
];

const TermsSection = () => {
  return (
    <section className="px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible>
            <AccordionItem value="terms" className="border-border">
              <AccordionTrigger className="font-display text-base font-semibold text-foreground hover:no-underline">
                📋 Términos y Condiciones
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pt-2">
                  {terms.map((term, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      {term}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default TermsSection;
