import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import {
  CreditCard, Shield, BarChart3, Smartphone, Zap,
  Building2, Lock, Users, Bell, FileCheck
} from 'lucide-react';

const products = [
  { icon: Building2, name: 'Conta Digital', desc: 'Abertura, gestão e movimentação de contas bancárias digitais (B2B, B2B2C)' },
  { icon: CreditCard, name: 'Pagamentos & Pix', desc: 'Transferências instantâneas, boletos, TED, pagamentos via QR Code' },
  { icon: BarChart3, name: 'Crédito', desc: 'Concessão, motor de análise, limites e gestão de crédito' },
  { icon: Shield, name: 'KYC & Compliance', desc: 'Onboarding digital, biometria facial, OCR de documentos' },
  { icon: Lock, name: 'Segurança de Transações', desc: 'Safe Selfie, dupla autenticação, hierarquia de aprovações' },
  { icon: Zap, name: 'APIs & Microsserviços', desc: 'Arquitetura de APIs B2B, migração de legado para microsserviços' },
  { icon: Users, name: 'Gestão de Multiusuários', desc: 'Perfis segmentados, hierarquia de aprovações e delegação por nível para clientes corporativos.' },
  { icon: Users, name: 'Backoffice & Admins', desc: 'Painéis de gestão para operadores, admins e clientes B2B' },
  { icon: Bell, name: 'Notificações & UX', desc: 'Design System, jornadas transacionais e comunicação in-app' },
  { icon: FileCheck, name: 'DDA', desc: 'Implementação do fluxo completo de Débito Direto Autorizado para pagamento de boletos e contas' },
];

export default function Products() {
  return (
    <AnimatedSection id="produtos" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Produtos
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Produtos que já <span className="text-primary">construí</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Features e produtos que concebi, priorizei, construí e colaborei para entregar ao mercado.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <product.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1">{product.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{product.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}