import Link from 'next/link';

const categories = [
  { name: 'Roupas esportivas', description: 'Prioridade da coleção: conforto + tecnologia' },
  { name: 'Tênis', description: 'Modelos para corrida, academia e quadra' },
  { name: 'Acessórios', description: 'Mochilas, garrafas e itens de suporte' }
];

export function FeaturedCategories() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Categorias em foco</h2>
        <Link href="/catalogo" className="text-sm text-blue-300 hover:text-blue-200">
          Ver tudo
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <article key={category.name} className="card-surface p-5">
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="mt-2 text-sm text-white/70">{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
