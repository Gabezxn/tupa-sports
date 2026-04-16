import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="grid gap-6 pt-6 md:grid-cols-2 md:items-center">
      <div className="space-y-5">
        <span className="inline-flex rounded-full border border-brand-blue/50 bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-blue-200">
          Nova coleção Performance 2026
        </span>
        <h1 className="text-4xl font-black leading-tight sm:text-5xl">
          Eleve seu jogo com a identidade da <span className="gradient-text">Tupã Sports</span>
        </h1>
        <p className="max-w-lg text-white/70">
          Roupas esportivas premium, tênis de alta performance e acessórios feitos para acompanhar seu ritmo.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold shadow-glow transition hover:scale-[1.02]"
          >
            Comprar agora
            <ArrowRight size={16} />
          </Link>
          <a href="#promocoes" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold">
            Ver promoções
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10">
        <Image
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80"
          alt="Atleta utilizando coleção Tupã Sports"
          width={1000}
          height={680}
          priority
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
