'use client';

import { authService } from '@/services/auth/authService';
import { tokenService } from '@/services/auth/tokenService';
import React, { createContext, useEffect, useState } from 'react';

export interface AuthContextData {
  isAuthenticated: boolean;
  user: UserData | null;
  login: (data: LoginData) => Promise<void>;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface UserData {
  username: string;
}

export interface LoginData {
  username: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserData | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const updateUser = async () => {
      const token = tokenService.getClientSide();
      const session = await authService.getSession(null, token);
      setUser({ username: session?.username || null });
    };

    updateUser();
  }, []);

  useEffect(() => {
    console.log("authcontext user changed", user)
  }, [user])

  async function login({ username, password }: LoginData) {
    const token = await authService.login({ username, password });
    const session = await authService.getSession(null, token);
    setUser({ username: session?.username || null });
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
