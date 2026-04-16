import { products } from '@/data/products';
import { ProductCard } from '@/components/produto/ProductCard';

export function FeaturedProducts() {
  const featured = products.filter((product) => product.featured);

  return (
    <section id="destaques" className="space-y-4">
      <h2 className="text-2xl font-bold">Produtos em destaque</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
