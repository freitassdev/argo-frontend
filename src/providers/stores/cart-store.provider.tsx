'use client';

import { createContext, useRef, type ReactNode } from 'react';
import { cartStore } from '@/stores/cart.store'; // Certifique-se do caminho correto

export const CartStoreContext = createContext<typeof cartStore | undefined>(
    undefined,
);

export interface CartStoreProviderProps {
    children: ReactNode;
}

export const CartStoreProvider = ({ children }: CartStoreProviderProps) => {
    const storeRef = useRef<typeof cartStore>();

    if (!storeRef.current) {
        storeRef.current = cartStore;
    }

    return (
        <CartStoreContext.Provider value={storeRef.current}>
            {children}
        </CartStoreContext.Provider>
    );
};
