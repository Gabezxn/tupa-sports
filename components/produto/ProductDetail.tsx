'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';
import { ProductCard } from './ProductCard';
import { motion } from 'framer-motion';

const reviews = [
  { author: 'Marina', text: 'Conforto incrível para treino diário.', score: 5 },
  { author: 'Lucas', text: 'Entrega rápida e qualidade premium.', score: 4 },
  { author: 'Ana', text: 'Vale o investimento, recomendo.', score: 5 }
];

export function ProductDetail({ product, related }: { product: Product; related: Product[] }) {
  const [size, setSize] = useState(product.sizes[0]);
  const { addItem } = useCart();
  const [requireLogin, setRequireLogin] = useState(false);

  const averageScore = useMemo(
    () => (reviews.reduce((acc, item) => acc + item.score, 0) / reviews.length).toFixed(1),
    []
  );

  return (
    <div className="space-y-10 pb-12">
      <section className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <Image src={product.image} alt={product.name} width={900} height={900} className="h-full w-full object-cover" priority />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-blue-300">{product.brand}</p>
          <h1 className="text-3xl font-black">{product.name}</h1>
          <p className="text-white/70">{product.description}</p>
          <p className="text-2xl font-bold">R$ {product.price.toFixed(2)}</p>

          <div>
            <p className="mb-2 text-sm text-white/70">Escolha o tamanho</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`rounded-lg border px-3 py-2 text-sm ${
                    size === item ? 'border-brand-blue bg-brand-blue/20' : 'border-white/20'
                  }`}
                  onClick={() => setSize(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button type="button" className="rounded-xl bg-brand-blue px-5 py-3 text-sm font-semibold" onClick={() => addItem(product.id, size)}>
              Adicionar ao carrinho
            </button>
            <button
              type="button"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm"
              onClick={() => setRequireLogin((prev) => !prev)}
            >
              Comprar agora
            </button>
          </div>

          {requireLogin ? (
            <div className="rounded-xl border border-blue-400/40 bg-blue-500/10 p-3 text-sm text-blue-100">
              Faça login para concluir sua compra. (Fluxo opcional de autenticação)
            </div>
          ) : null}
        </motion.div>
      </section>

      <section className="card-surface p-5">
        <h2 className="mb-2 text-xl font-semibold">Avaliações ({averageScore})</h2>
        <div className="space-y-3">
          {reviews.map((review) => (
            <article key={review.author} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
              <p className="font-semibold">{review.author}</p>
              <p className="text-white/70">{review.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Produtos relacionados</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
