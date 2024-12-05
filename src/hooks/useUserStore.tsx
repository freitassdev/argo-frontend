'use client';

import { UserStoreContext } from '@/providers/stores/user-store.provider';
import { useContext } from 'react';
import { useStore } from 'zustand';
import { UserStore } from '@/stores/user.store';

export const useUserStore = <T,>(selector: (state: UserStore) => T): T => {
  const userStoreContext = useContext(UserStoreContext);

  if (!userStoreContext) {
    throw new Error(`useUserStore must be used within a UserStoreProvider`);
  }

  return useStore(userStoreContext, selector);
};
