'use client';

import { IUser } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UserState = IUser;
export type UserActions = {
  setUser: (user: IUser) => void;
  resetUser: () => void;
};

export type UserStore = UserState & UserActions;

const baseUser: IUser = {
  id: 0,
  accessNivel: 0,
  name: '',
  blocked: false,
  cpf: '',
  dateOfBirth: '',
  email: '',
  sessionId: ''
};

export const userStore = create<UserStore>()(
  persist(
    (set) => ({
      ...baseUser,
      setUser: (user: IUser) =>
        set(() => ({
          ...user
        })),
      resetUser: () =>
        set(() => ({
          ...baseUser
        }))
    }),
    {
      name: 'user-store',
      partialize: (state) => ({ 
        id: state.id, 
        accessNivel: state.accessNivel, 
        name: state.name, 
        email: state.email, 
        blocked: state.blocked, 
        cpf: state.cpf, 
        dateOfBirth: state.dateOfBirth,
        sessionId: state.sessionId
      }), // Escolhe quais estados serão persistidos
    }
  )
);
