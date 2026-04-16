import { products, type Product } from '@/data/products';

export type ProductFilters = {
  search?: string;
  size?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  sport?: string;
};

export function filterProducts(filters: ProductFilters): Product[] {
  return products.filter((product) => {
    const search = filters.search?.toLowerCase().trim();

    if (search && !product.name.toLowerCase().includes(search) && !product.category.toLowerCase().includes(search)) {
      return false;
    }

    if (filters.size && !product.sizes.includes(filters.size)) {
      return false;
    }

    if (filters.brand && product.brand !== filters.brand) {
      return false;
    }

    if (filters.sport && product.sport !== filters.sport) {
      return false;
    }

    if (filters.minPrice && product.price < filters.minPrice) {
      return false;
    }

    if (filters.maxPrice && product.price > filters.maxPrice) {
      return false;
    }

    return true;
  });
}

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
