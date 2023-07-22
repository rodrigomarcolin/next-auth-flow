import Link from 'next/link';
import { NavLinksProps } from '../interfaces';

const NavLinks = ({ links }: NavLinksProps) => {
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.to}
            href={link.to}
            className={`font-semibold text-xl text-font px-4 py-1 rounded-full ${
              link.type == 'button' ? 'bg-primary' : ''
            }`}
          >
            {link.text}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
