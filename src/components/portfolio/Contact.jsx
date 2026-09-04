import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const contactItems = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    desc: '(31) 9 8386-8066',
    href: 'https://wa.me/5531983868066?text=Olá Letícia! Vi seu portfólio e gostaria de conversar.',
    primary: true,
  },
  {
    icon: Mail,
    label: 'E-mail',
    desc: 'letmoura2017@gmail.com',
    href: 'mailto:letmoura2017@gmail.com',
    primary: false,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    desc: 'letícia-moura1',
    href: 'https://linkedin.com/in/letícia-moura1',
    primary: false,
  },
];

export default function Contact() {
  return (
    <AnimatedSection id="contato" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">
          Contato
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
          Vamos <span className="text-primary">conversar?</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          Aberta a novas oportunidades, parcerias e mentorias. Me chama — adoro boas conversas sobre produto e carreira.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group flex flex-col items-center p-8 rounded-2xl border transition-all duration-300 ${
                item.primary
                  ? 'bg-primary text-primary-foreground border-primary hover:shadow-xl hover:shadow-primary/20'
                  : 'bg-card border-border/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'
              }`}
            >
              <item.icon className={`w-8 h-8 mb-4 ${item.primary ? 'text-primary-foreground' : 'text-primary'}`} />
              <h3 className={`font-semibold text-lg mb-1 ${item.primary ? '' : 'text-foreground'}`}>
                {item.label}
              </h3>
              <p className={`text-sm text-center ${item.primary ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {item.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}