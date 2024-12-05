'use client';

import { CartStoreContext } from '@/providers/stores/cart-store.provider';
import { useContext } from 'react';
import { useStore } from 'zustand';
import { CartStore } from '@/stores/cart.store';

export const useCartStore = <T,>(selector: (state: CartStore) => T): T => {
  const cartStoreContext = useContext(CartStoreContext);

  if (!cartStoreContext) {
    throw new Error(`useCartStore must be used within a CartStoreProvider`);
  }

  return useStore(cartStoreContext, selector);
};
