'use client';

import { createContext, useContext, useMemo, useReducer } from 'react';
import { coupons, products } from '@/data/products';

type CartItem = {
  productId: string;
  quantity: number;
  size: string;
};

type CartState = {
  items: CartItem[];
  couponCode?: keyof typeof coupons;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { productId: string; size: string } }
  | { type: 'SET_COUPON'; payload?: keyof typeof coupons }
  | { type: 'CLEAR' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const exists = state.items.find(
        (item) => item.productId === action.payload.productId && item.size === action.payload.size
      );

      if (exists) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.productId === action.payload.productId && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      }

      return { ...state, items: [...state.items, action.payload] };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.productId === action.payload.productId && item.size === action.payload.size)
        )
      };
    case 'SET_COUPON':
      return { ...state, couponCode: action.payload };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

type CartContextType = {
  state: CartState;
  addItem: (productId: string, size: string, quantity?: number) => void;
  removeItem: (productId: string, size: string) => void;
  applyCoupon: (code: string) => boolean;
  subtotal: number;
  discount: number;
  total: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const subtotal = useMemo(() => {
    return state.items.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.productId);
      return acc + (product?.price ?? 0) * item.quantity;
    }, 0);
  }, [state.items]);

  const discount = state.couponCode ? subtotal * coupons[state.couponCode] : 0;
  const total = subtotal - discount;

  function addItem(productId: string, size: string, quantity = 1) {
    dispatch({ type: 'ADD_ITEM', payload: { productId, size, quantity } });
  }

  function removeItem(productId: string, size: string) {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId, size } });
  }

  function applyCoupon(code: string): boolean {
    const normalized = code.trim().toUpperCase() as keyof typeof coupons;

    if (coupons[normalized]) {
      dispatch({ type: 'SET_COUPON', payload: normalized });
      return true;
    }

    return false;
  }

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, applyCoupon, subtotal, discount, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart deve ser usado dentro de CartProvider');
  }

  return context;
}
