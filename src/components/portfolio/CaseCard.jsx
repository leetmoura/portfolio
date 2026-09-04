import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function CaseCard({ caseData, index }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = caseData.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => setExpanded(!expanded)}
      className="group cursor-pointer"
    >
      <div className="relative p-6 md:p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-playfair text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {caseData.title}
              </h3>
              <div className="flex gap-2 mt-1 flex-wrap">
                {caseData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <ChevronDown className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`} />
        </div>

        <div className="space-y-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">Problema</span>
            <p className="text-sm text-muted-foreground mt-1">{caseData.problem}</p>
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Solução</span>
            <p className="text-sm text-muted-foreground mt-1">{caseData.solution}</p>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4 mt-4 border-t border-border">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Impacto</span>
            <div className="grid grid-cols-3 gap-3 mt-3">
              {caseData.metrics.map((metric) => (
                <div key={metric.label} className="text-center p-3 rounded-xl bg-secondary/60">
                  <p className="text-xl font-bold text-primary">{metric.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {!expanded && (
          <p className="text-xs text-muted-foreground mt-3 opacity-60">Clique para ver o impacto →</p>
        )}
      </div>
    </motion.div>
  );
}