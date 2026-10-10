import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="flex items-center gap-2 text-lg font-extrabold text-foreground">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FD3DB5] to-[#FB6A2C] flex items-center justify-center" aria-hidden="true">
            <svg width="12" height="15" viewBox="0 0 18 22"><path d="M11 0 L1 13 H8 L6 22 L17 8 H10 Z" fill="#FFFBF5" /></svg>
          </span>
          letsproduct
        </p>
        <p className="text-sm text-muted-foreground flex items-center gap-1 flex-wrap justify-center">
          © {new Date().getFullYear()} — Feito com <Heart className="inline w-4 h-4 -mt-0.5 fill-primary text-primary" aria-label="amor" /> amor, IA e uns cafezin
        </p>
      </div>
    </footer>
  );
}