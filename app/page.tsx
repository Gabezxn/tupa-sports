import { Hero } from '@/components/home/Hero';
import { FeaturedCategories } from '@/components/home/FeaturedCategories';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { PromotionStrip } from '@/components/home/PromotionStrip';

export default function HomePage() {
  return (
    <div className="space-y-8 pb-12">
      <Hero />
      <PromotionStrip />
      <FeaturedCategories />
      <FeaturedProducts />
    </div>
  );
}
