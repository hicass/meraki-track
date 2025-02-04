import { FC } from 'react';
import Link from 'next/link';

type NavLink = {
  title: string;
  href: string;
};

const navLinks: NavLink[] = [
  { title: 'Dashboard', href: '' },
  { title: 'Profile', href: 'profile' },
];

const DashboardNav: FC = () => {
  const navLinkElements = navLinks.map((link, idx) => (
    <Link
      href={`/dashboard/${link.href}`}
      key={idx}
      className="text-gray-200 hover:text-white"
    >
      {link.title}
    </Link>
  ));

  return (
    <nav className="border flex flex-col justify-between items-center p-2">
      {navLinkElements}
    </nav>
  );
};

export default DashboardNav;
