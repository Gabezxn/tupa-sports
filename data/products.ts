export type Product = {
  id: string;
  slug: string;
  name: string;
  category: 'Roupas' | 'Tênis' | 'Acessórios';
  sport: 'Treino' | 'Corrida' | 'Futebol' | 'Basquete';
  brand: 'Tupã' | 'Nike' | 'Adidas' | 'Puma';
  price: number;
  oldPrice?: number;
  sizes: string[];
  rating: number;
  reviews: number;
  image: string;
  description: string;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: '1',
    slug: 'jaqueta-tupa-force',
    name: 'Jaqueta Tupã Force Dry',
    category: 'Roupas',
    sport: 'Treino',
    brand: 'Tupã',
    price: 289.9,
    oldPrice: 349.9,
    sizes: ['P', 'M', 'G', 'GG'],
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=80',
    description: 'Jaqueta técnica com tecido respirável e corte atlético para treinos intensos.',
    featured: true
  },
  {
    id: '2',
    slug: 'tenis-speedpulse-9',
    name: 'Tênis SpeedPulse 9',
    category: 'Tênis',
    sport: 'Corrida',
    brand: 'Nike',
    price: 599.9,
    oldPrice: 699.9,
    sizes: ['38', '39', '40', '41', '42', '43'],
    rating: 4.9,
    reviews: 221,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80',
    description: 'Amortecimento responsivo e retorno de energia para corridas urbanas.',
    featured: true
  },
  {
    id: '3',
    slug: 'camisa-match-pro',
    name: 'Camisa Match Pro',
    category: 'Roupas',
    sport: 'Futebol',
    brand: 'Adidas',
    price: 189.9,
    sizes: ['P', 'M', 'G', 'GG'],
    rating: 4.6,
    reviews: 84,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=1200&q=80',
    description: 'Camisa leve com tecnologia antiodor e secagem rápida para jogos e treinos.'
  },
  {
    id: '4',
    slug: 'short-adrenaline-flex',
    name: 'Short Adrenaline Flex',
    category: 'Roupas',
    sport: 'Treino',
    brand: 'Tupã',
    price: 129.9,
    sizes: ['P', 'M', 'G', 'GG'],
    rating: 4.7,
    reviews: 67,
    image: 'https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=1200&q=80',
    description: 'Elasticidade premium e bolsos funcionais para mobilidade total.',
    featured: true
  },
  {
    id: '5',
    slug: 'tenis-court-vibe',
    name: 'Tênis Court Vibe',
    category: 'Tênis',
    sport: 'Basquete',
    brand: 'Puma',
    price: 479.9,
    sizes: ['39', '40', '41', '42', '43'],
    rating: 4.5,
    reviews: 59,
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80',
    description: 'Estabilidade lateral reforçada e tração ideal para quadra.'
  },
  {
    id: '6',
    slug: 'mochila-urban-sport-25l',
    name: 'Mochila Urban Sport 25L',
    category: 'Acessórios',
    sport: 'Treino',
    brand: 'Tupã',
    price: 219.9,
    sizes: ['Único'],
    rating: 4.4,
    reviews: 44,
    image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&w=1200&q=80',
    description: 'Compartimentos inteligentes para dia a dia e pré-treino.'
  }
];

export const coupons = {
  TUPA10: 0.1,
  TREINO15: 0.15
};
