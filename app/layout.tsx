import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartContext';
import { ChatWidget } from '@/components/chat/ChatWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tupã Sports | Performance e estilo em cada treino',
  description:
    'Loja online da Tupã Sports com roupas esportivas, tênis e acessórios premium para quem vive em movimento.',
  keywords: ['Tupã Sports', 'roupas esportivas', 'tênis', 'academia', 'corrida', 'futebol'],
  openGraph: {
    title: 'Tupã Sports',
    description: 'Performance e estilo em cada treino.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <CartProvider>
          <div className="mx-auto min-h-screen max-w-7xl px-4 sm:px-6 lg:px-8">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
          <ChatWidget />
        </CartProvider>
      </body>
    </html>
  );
}
