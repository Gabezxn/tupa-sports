'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

export function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { state, removeItem, applyCoupon, subtotal, discount, total } = useCart();
  const [coupon, setCoupon] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) {
    return null;
  }

  const cartItems = state.items.map((item) => {
    const product = products.find((product) => product.id === item.productId);
    return { ...item, product };
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/60">
      <aside className="ml-auto h-full w-full max-w-md overflow-y-auto bg-brand-steel p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Seu carrinho</h2>
          <button type="button" onClick={onClose}>
            Fechar
          </button>
        </div>

        <div className="space-y-3">
          {cartItems.length ? (
            cartItems.map((item) => (
              <div key={`${item.productId}-${item.size}`} className="rounded-xl border border-white/15 p-3 text-sm">
                <p className="font-semibold">{item.product?.name}</p>
                <p className="text-white/70">
                  Tamanho {item.size} · Qtd {item.quantity}
                </p>
                <button
                  type="button"
                  className="mt-2 text-xs text-red-300"
                  onClick={() => removeItem(item.productId, item.size)}
                >
                  Remover
                </button>
              </div>
            ))
          ) : (
            <p className="text-sm text-white/70">Carrinho vazio.</p>
          )}
        </div>

        <div className="mt-6 space-y-3 rounded-xl border border-white/15 p-4">
          <div className="flex gap-2">
            <input
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Cupom"
              className="w-full rounded-lg border border-white/20 bg-black/20 p-2 text-sm"
            />
            <button
              type="button"
              className="rounded-lg bg-brand-blue px-3 text-sm"
              onClick={() => {
                const ok = applyCoupon(coupon);
                setMessage(ok ? 'Cupom aplicado com sucesso.' : 'Cupom inválido.');
              }}
            >
              Aplicar
            </button>
          </div>

          {message ? <p className="text-xs text-blue-200">{message}</p> : null}

          <p className="text-sm">Subtotal: R$ {subtotal.toFixed(2)}</p>
          <p className="text-sm">Desconto: R$ {discount.toFixed(2)}</p>
          <p className="text-lg font-bold">Total: R$ {total.toFixed(2)}</p>
        </div>
      </aside>
    </div>
  );
}
