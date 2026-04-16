const promotions = [
  'Frete grátis em compras acima de R$299',
  'Cupom TUPA10 para primeira compra',
  'Até 35% OFF em roupas esportivas'
];

export function PromotionStrip() {
  return (
    <section id="promocoes" className="card-surface grid gap-3 p-4 sm:grid-cols-3">
      {promotions.map((promo) => (
        <article key={promo} className="rounded-xl bg-brand-steel p-3 text-sm font-semibold text-blue-100">
          {promo}
        </article>
      ))}
    </section>
  );
}
