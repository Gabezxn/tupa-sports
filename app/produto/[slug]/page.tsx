import { notFound } from 'next/navigation';
import { getProductBySlug, filterProducts } from '@/services/productService';
import { ProductDetail } from '@/components/produto/ProductDetail';

type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const related = filterProducts({ sport: product.sport }).filter((item) => item.id !== product.id).slice(0, 3);

  return <ProductDetail product={product} related={related} />;
}
