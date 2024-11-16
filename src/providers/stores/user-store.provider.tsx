'use client';

import { createContext, useRef, type ReactNode } from 'react';
import { userStore } from '@/stores/user.store'; // Certifique-se do caminho correto

export const UserStoreContext = createContext<typeof userStore | undefined>(
    undefined,
);

export interface UserStoreProviderProps {
    children: ReactNode;
}

export const UserStoreProvider = ({ children }: UserStoreProviderProps) => {
    const storeRef = useRef<typeof userStore>();

    if (!storeRef.current) {
        storeRef.current = userStore;
    }

    return (
        <UserStoreContext.Provider value={storeRef.current}>
            {children}
        </UserStoreContext.Provider>
    );
};
