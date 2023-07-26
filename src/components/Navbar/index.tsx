'use client';

import NavLinks from './NavLinks';
import Link from 'next/link';
import { NavLinkType } from './interfaces';
import { AuthContext } from '@/contexts/AuthContext';
import { useContext, useEffect } from 'react';

const Navbar = () => {
  const { isAuthenticated, user} = useContext(AuthContext);

  const loggedOutLinks: NavLinkType[] = [
    {
      to: '/',
      text: 'Início',
      type: 'text',
    },
    {
      to: '/login',
      text: 'Entrar',
      type: 'button',
    },
  ];

  const loggedInLinks: NavLinkType[] = [
    {
      to: '/home',
      text: 'Início',
      type: 'text',
    },
    {
      to: '/home/contas',
      text: 'Contas',
      type: 'text',
    },
    {
      to: '/logout',
      text: 'Sair',
      type: 'button',
    },
  ];

  return (
    <nav className="flex items-center gap-4 w-full max-w-7xl mx-auto justify-between">
      <Link href="/">
        <div className="flex items-center gap-4 hover:cursor-pointer">
          <img src="/images/cute_close.jpg" width={32} height={32} alt="Logo" />
          <h2 className="font-bold text-xl md:text-3xl text-font">Manager</h2>
        </div>
      </Link>
      <div className="flex items-center gap-4">
        <NavLinks links={isAuthenticated ? loggedInLinks : loggedOutLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
