'use client';

import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { useState } from 'react';

export function Header() {
  const { state } = useCart();
  const [openCart, setOpenCart] = useState(false);

  return (
    <header className="sticky top-0 z-40 mb-6 border-b border-white/10 bg-brand-night/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-black tracking-tight sm:text-xl">
          Tupã <span className="gradient-text">Sports</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <Link href="/catalogo" className="hover:text-white">
            Catálogo
          </Link>
          <a href="#promocoes" className="hover:text-white">
            Promoções
          </a>
          <a href="#destaques" className="hover:text-white">
            Destaques
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpenCart(true)}
          className="relative rounded-full border border-white/20 p-2 hover:border-brand-blue"
          aria-label="Abrir carrinho"
        >
          <ShoppingBag size={20} />
          <span className="absolute -right-1 -top-1 rounded-full bg-brand-blue px-1.5 text-xs font-semibold">
            {state.items.length}
          </span>
        </button>
      </div>

      <CartDrawer isOpen={openCart} onClose={() => setOpenCart(false)} />
    </header>
  );
}
