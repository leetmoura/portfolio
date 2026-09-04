import AnimatedSection from './AnimatedSection';
import { BarChart3, Layers, Cpu, Building2, Home, TrendingUp, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const highlights = [
  {
    icon: Layers,
    title: 'Banking as a Service',
    desc: 'Liderança de squads em plataformas de conta digital, crédito e microsserviços, atuando em App, Web Banking, Backoffice e APIs.',
  },
  {
    icon: BarChart3,
    title: 'Decisões orientadas a dados',
    desc: 'Acompanhamento de métricas, SQL via Metabase, PostHog e observabilidade de API para priorização estratégica de roadmap.',
  },
  {
    icon: Cpu,
    title: 'Arquitetura & APIs',
    desc: 'Transição de API legada para microsserviços, gestão de APIs B2B e alinhamento técnico entre negócio e engenharia.',
  },
];

const milestones = [
  { icon: Building2, period: '2023 — ATUAL', role: 'Product Manager', company: 'iDez Digital' },
  { icon: Home, period: 'ANTERIOR', role: 'Product Owner', company: 'Diaristando' },
  { icon: TrendingUp, period: 'INÍCIO', role: 'Analista Financeiro', company: 'QuintoAndar' },
  { icon: GraduationCap, period: 'FORMAÇÃO', role: 'Ciências Contábeis + Pós em Gestão de TI', company: 'Base acadêmica em finanças e tecnologia' },
];

export default function About() {
  return (
    <AnimatedSection id="sobre" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top: 2 columns */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 text-primary leading-tight">
              Sobre mim
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Sou a <strong className="text-foreground">Lets</strong>, Product Manager com foco em produtos financeiros digitais. Comecei minha carreira na área financeira, o que me deu uma base muito forte em números, processos e entendimento de negócio. Com o tempo, fui me aproximando da tecnologia e percebi que queria ir além da operação — queria construir soluções.
              </p>
              <p>
                Hoje atuo na <strong className="text-foreground">Idez Digital</strong>, liderando produtos nas frentes de Conta Bancária, Crédito e Microsserviços. Gosto de conectar o que o negócio precisa com o que a tecnologia possibilita, transformando problemas complexos em soluções escaláveis.
              </p>
              <p>
                Me movem dados, problemas reais dos usuários e a construção de produtos que geram impacto de verdade — tanto para os usuários quanto para o negócio.
              </p>
            </div>

          </div>

          {/* Right column — Timeline */}
          <div className="p-6 rounded-2xl bg-card border border-border/60">
            <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-5">Trajetória</h3>
            <div className="relative pl-4">
              <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-border" />
              <div className="space-y-5">
                {milestones.map((item, i) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="shrink-0 w-8 h-8 rounded-full bg-background border-2 border-primary/30 flex items-center justify-center z-10">
                      <item.icon className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-xs font-bold text-primary uppercase tracking-wider">{item.period}</p>
                      <p className="text-sm font-semibold text-foreground leading-tight">{item.role}</p>
                      <p className="text-xs text-muted-foreground">{item.company}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tags full width */}
        <div className="mt-8 flex flex-wrap gap-2">
          {['Fintech', 'BaaS', 'APIs', 'SQL', 'OKRs', 'Dual-Track Agile', 'Figma', 'Metabase', 'PostHog', 'Discovery', 'Roadmap', 'KPIs', 'Métricas de Produto', 'North Star Metric', 'Funil de Conversão', 'Retenção', 'Churn', 'Gestão de Stakeholders', 'User Story Mapping', 'Priorização', 'Go-to-Market'].map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom: Highlights full width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex flex-col gap-2 p-5 rounded-xl bg-secondary/40 border border-border/40 hover:border-primary/20 hover:bg-secondary/60 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm mb-0.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}