'use client';

import NavLinks from './NavLinks';
import Link from 'next/link';
import { NavLinkType } from './interfaces';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext, useEffect } from 'react';
import { SpinContext } from '@/contexts/SpinContext';

const Navbar = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { spin } = useContext(SpinContext);
  const loggedOutLinks: NavLinkType[] = [
    {
      to: '/',
      text: 'Início',
    },
    {
      to: '/login',
      text: 'Entrar',
    },
  ];

  const loggedInLinks: NavLinkType[] = [
    {
      to: '/home',
      text: 'Início',
    },
    {
      to: '/home/contas',
      text: 'Contas',
    },
    {
      to: '/logout',
      text: 'Sair',
    },
  ];

  return (
    <nav className="flex items-center gap-4 w-full max-w-7xl mx-auto justify-between">
      <Link href="/">
        <div className="flex items-center gap-4 hover:cursor-pointer">
          {spin && (
            <div className="flex items-center justify-center">
              <div className="animate-spin text-xl md:text-3xl">
                <p className="color-change-animation">Manager</p>
              </div>
            </div>
          )}
          {!spin && (
            <h2 className="font-bold text-xl md:text-3xl text-font">Manager</h2>
          )}
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <NavLinks links={isAuthenticated ? loggedInLinks : loggedOutLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
