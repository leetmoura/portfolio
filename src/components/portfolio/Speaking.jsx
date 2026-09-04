import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { MapPin, MessageCircle, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const events = [
  {
    title: 'Desmistificando a Área de Produto',
    org: 'Órbi Conecta — Grupo Produto BH',
    type: 'Presencial',
    desc: 'Meetup sobre carreiras em tecnologia, desmistificando o papel de PM para profissionais em transição.',
    link: 'https://www.linkedin.com/posts/let%C3%ADcia-moura1_produto-transiaexaetodecarreira-networking-ugcPost-7291125709660422144-urrH?utm_source=share&utm_medium=member_desktop&rcm=ACoAACapEvwBPNNdLvgZa_pYkvf5ARBYN0m7TQA',
    photos: [
      { src: `${import.meta.env.BASE_URL}img/palestra1-1.jpg`, fit: 'object-cover' },
      { src: `${import.meta.env.BASE_URL}img/palestra1-2.jpg`, fit: 'object-cover' },
    ],
  },
  {
    title: 'Conecta Elas — Mulheres na TI',
    org: 'JA Minas Gerais',
    type: 'Presencial',
    desc: 'Painel sobre Mulheres na TI para jovens alunas do projeto Conecta Elas, realizado pela JA Minas com apoio da Prefeitura de BH.',
    photos: [
      { src: `${import.meta.env.BASE_URL}img/palestra2-1.jpg`, fit: 'object-cover' },
      { src: `${import.meta.env.BASE_URL}img/palestra2-2.jpg`, fit: 'object-cover' },
    ],
  },
  {
    title: 'Produto Orientado a Resultado com IA',
    org: 'Product Camp Pocket Beagá',
    type: 'Presencial',
    desc: 'Painel sobre produto orientado a resultado em um mundo híbrido de IA + negócio + execução real.',
    link: 'https://www.linkedin.com/posts/let%C3%ADcia-moura1_produto-productmanagement-ia-ugcPost-7455557276104310785-dOF7?utm_source=share&utm_medium=member_desktop&rcm=ACoAACapEvwBPNNdLvgZa_pYkvf5ARBYN0m7TQA',
    photos: [
      { src: `${import.meta.env.BASE_URL}img/palestra3-1.jpg`, fit: 'object-cover' },
      { src: `${import.meta.env.BASE_URL}img/palestra3-2.jpg`, fit: 'object-cover' },
    ],
  },
];

function EventCard({ event, index }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? event.photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === event.photos.length - 1 ? 0 : c + 1));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="rounded-2xl bg-card border border-border/60 overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      {/* Photo carousel */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) next();
            else if (info.offset.x > 50) prev();
          }}
        >
          <img
            src={event.photos[current].src}
            alt={event.title}
            className={`w-full h-full select-none pointer-events-none ${event.photos[current].fit}`}
            draggable={false}
          />
        </motion.div>

        {event.photos.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center hover:bg-black/60 transition text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur flex items-center justify-center hover:bg-black/60 transition text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
              {event.photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${i === current ? 'bg-white w-4' : 'bg-white/50 w-1.5'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center gap-1.5 mb-2">
          <MapPin className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-semibold text-primary">{event.type}</span>
          <span className="text-xs text-muted-foreground">· {event.org}</span>
        </div>
        <h3 className="font-semibold text-foreground text-sm leading-snug mb-1">{event.title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{event.desc}</p>
        {event.link && (
          <a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-primary hover:underline"
          >
            <Linkedin className="w-3.5 h-3.5" />
            Ver post no LinkedIn
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Speaking() {
  return (
    <AnimatedSection id="palestras" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Palestras & Workshops
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-3 text-foreground leading-tight">
            Compartilhando <span className="text-primary">conhecimento</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Gosto de conectar pessoas, trocar experiências e compartilhar aprendizados reais do dia a dia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Interessado em me convidar para palestrar ou participar de eventos?</p>
          <Button size="lg" className="gap-2 rounded-full px-8" asChild>
            <a
              href="https://wa.me/5531983868066?text=Olá Letícia! Tenho interesse em te convidar para um evento/workshop."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              Entre em contato
            </a>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  );
}