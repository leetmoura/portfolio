import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}>
              
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Product Manager
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}>
              
              <p className="text-xl text-muted-foreground mb-2">oiiii, eu sou a</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              
              Letícia <span className="text-primary italic">Moura.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base text-muted-foreground mt-4 mb-2 max-w-lg leading-relaxed border-l-4 border-primary/30 pl-4">
              
              construir produtos financeiros digitais que escalam, conectar estratégia com tecnologia e impulsionar pessoas é o que me move.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-sm text-muted-foreground mt-4 mb-8 max-w-lg">
              
              PM com foco em <strong className="text-foreground">fintechs</strong>, contas digitais, cartão e crédito
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3">
              
              <Button size="lg" className="gap-2 rounded-full px-8 shadow-lg shadow-primary/20" asChild>
                <a href="https://wa.me/5531983868066?text=Olá Letícia! Vi seu portfólio e gostaria de conversar." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Vamos conversar
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                <a href="#cases">
                  Ver cases →
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-8" asChild>
                <a href="https://media.base44.com/files/public/69c32a82b6219d6e0c28de1e/75c10d35b_2026Curriculodocx.pdf" target="_blank" rel="noopener noreferrer" download>
                  <Download className="w-5 h-5" />
                  Currículo
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center">
            
            <div className="relative">
              <div className="w-72 h-72 md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl shadow-primary/10">
                <img
                  src={`${import.meta.env.BASE_URL}img/hero.jpg`}
                  alt="Letícia de Moura Silva - Product Manager"
                  width="800"
                  height="800"
                  className="w-full h-full object-cover object-top" />
                
              </div>
              <div className="absolute -inset-3 rounded-full border border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
              <div className="absolute -inset-6 rounded-full border border-dashed border-accent/10 animate-[spin_45s_linear_infinite_reverse]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}