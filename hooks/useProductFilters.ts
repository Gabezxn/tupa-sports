'use client';

import { useMemo, useState } from 'react';
import { filterProducts } from '@/services/productService';

export function useProductFilters() {
  const [search, setSearch] = useState('');
  const [size, setSize] = useState('');
  const [brand, setBrand] = useState('');
  const [sport, setSport] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 800]);

  const filtered = useMemo(
    () =>
      filterProducts({
        search,
        size: size || undefined,
        brand: brand || undefined,
        sport: sport || undefined,
        minPrice: priceRange[0],
        maxPrice: priceRange[1]
      }),
    [brand, priceRange, search, size, sport]
  );

  return {
    search,
    setSearch,
    size,
    setSize,
    brand,
    setBrand,
    sport,
    setSport,
    priceRange,
    setPriceRange,
    filtered
  };
}
