'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { Star } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="card-surface overflow-hidden">
      <Link href={`/produto/${product.slug}`}>
        <Image src={product.image} alt={product.name} width={700} height={500} className="h-52 w-full object-cover" loading="lazy" />
      </Link>
      <div className="space-y-3 p-4">
        <div>
          <p className="text-xs uppercase tracking-widest text-blue-300">{product.category}</p>
          <h3 className="text-lg font-semibold">{product.name}</h3>
        </div>
        <div className="flex items-center gap-1 text-sm text-yellow-300">
          <Star size={14} fill="currentColor" /> {product.rating} ({product.reviews})
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">R$ {product.price.toFixed(2)}</p>
          <button
            type="button"
            className="rounded-lg bg-brand-blue px-3 py-2 text-sm font-semibold"
            onClick={() => addItem(product.id, product.sizes[0])}
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  );
}
