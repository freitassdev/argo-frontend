'use client';

import { ICart, ICartItem } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type CartState = ICart;
export type CartActions = {
    setCartItems: (items: ICartItem[]) => void;
};

export type CartStore = CartState & CartActions;

const baseCart: ICart = {
    items: [],
    total: '0.00',
};

export const cartStore = create<CartStore>()(
    persist(
        (set) => ({
            ...baseCart,
            setCartItems: (items) => {
                const totalCartPrice = items.reduce((acc, item) => {
                    const price = parseFloat(item.price);
                    return acc + (isNaN(price) ? 0 : price);
                }, 0);
                return set(() => ({
                    items: items,
                    total: totalCartPrice.toFixed(2),
                }))
            }
        }),
        {
            name: 'cart-store',
            partialize: (state) => ({
                total: state.total,
                items: state.items,
            }), // Escolhe quais estados serão persistidos
        }
    )
);
