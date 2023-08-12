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
            className="font-semibold text-xl text-font px-4 py-1"
          >
            {link.text}
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
