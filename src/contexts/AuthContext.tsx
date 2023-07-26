'use client';

import { authService } from '@/services/auth/authService';
import { tokenService } from '@/services/auth/tokenService';
import React, { createContext, useEffect, useState } from 'react';

export interface AuthContextData {
  isAuthenticated: boolean;
  user: IUserData | null;
  login: (data: ILoginData) => Promise<void>;
  logout: () => Promise<void>;
}

export interface IAuthProviderProps {
  children: React.ReactNode;
}

export interface IUserData {
  username: string;
}

export interface ILoginData {
  username: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<IUserData | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const updateUser = async () => {
      const token = tokenService.getClientSide();
      const session = await authService.getClientSession({ ctx: null, token });

      setUser(session);
    };

    updateUser();
  }, []);

  useEffect(() => {
    console.log('authcontext user changed', user);
  }, [user]);

  async function login({ username, password }: ILoginData) {
    const token = await authService.login({ username, password });
    const session = await authService.getClientSession({ ctx: null, token });
    setUser({ username: session?.username || null });
  }

  async function logout() {
    await authService.logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
