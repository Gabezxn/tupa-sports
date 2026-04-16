'use client';

import { ProductCard } from '@/components/produto/ProductCard';
import { SkeletonGrid } from '@/components/ui/SkeletonGrid';
import { useProductFilters } from '@/hooks/useProductFilters';
import { useEffect, useState } from 'react';

const brands = ['Tupã', 'Nike', 'Adidas', 'Puma'];
const sports = ['Treino', 'Corrida', 'Futebol', 'Basquete'];
const sizes = ['P', 'M', 'G', 'GG', '38', '39', '40', '41', '42', '43'];

export function CatalogClient() {
  const { search, setSearch, brand, setBrand, sport, setSport, size, setSize, priceRange, setPriceRange, filtered } =
    useProductFilters();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 550);
    return () => clearTimeout(timer);
  }, [search, brand, sport, size, priceRange]);

  return (
    <div className="space-y-6 pb-10">
      <h1 className="text-3xl font-black">Catálogo Tupã Sports</h1>

      <div className="card-surface grid gap-4 p-4 md:grid-cols-5">
        <input
          placeholder="Buscar por produto ou categoria"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border border-white/15 bg-black/20 p-2 text-sm md:col-span-2"
        />

        <select value={brand} onChange={(e) => setBrand(e.target.value)} className="rounded-lg border border-white/15 bg-black/20 p-2 text-sm">
          <option value="">Marca</option>
          {brands.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <select value={sport} onChange={(e) => setSport(e.target.value)} className="rounded-lg border border-white/15 bg-black/20 p-2 text-sm">
          <option value="">Esporte</option>
          {sports.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <select value={size} onChange={(e) => setSize(e.target.value)} className="rounded-lg border border-white/15 bg-black/20 p-2 text-sm">
          <option value="">Tamanho</option>
          {sizes.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <div className="md:col-span-5">
          <label className="text-xs text-white/70">Preço máximo: R$ {priceRange[1]}</label>
          <input
            type="range"
            min={80}
            max={800}
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full"
          />
        </div>
      </div>

      {isLoading ? (
        <SkeletonGrid />
      ) : filtered.length ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="card-surface p-6 text-sm text-white/70">Nenhum produto encontrado com os filtros escolhidos.</div>
      )}
    </div>
  );
}
