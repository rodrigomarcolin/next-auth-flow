'use client';

import { authService } from '@/services/auth/authService';
import { tokenService } from '@/services/auth/tokenService';
import React, { Dispatch, SetStateAction, createContext, useEffect, useState } from 'react';

export interface SpinContextData {
  setSpin: Dispatch<SetStateAction<boolean>>;
  spin: boolean;
}

export interface ISpinProviderProps {
  children: React.ReactNode;
}

export const SpinContext = createContext({} as SpinContextData);

export function SpinProvider({ children }: ISpinProviderProps) {
  const [spin, setSpin] = useState<boolean>(false);


  return (
    <SpinContext.Provider value={{ spin, setSpin }}>
      {children}
    </SpinContext.Provider>
  );
}
