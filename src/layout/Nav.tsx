import Link from 'next/link';
import { DarkModeToggle } from 'src/components/DarkmodeToggle';

const ITEMS = [
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
  {
    href: '/portfolio',
    title: 'Portfolio',
  },
  {
    href: '/contact',
    title: 'Contact',
  },
];

type Props = {
  opened: boolean;
};

export const Nav = () => {
  return (
    <div className="flex items-center justify-center ">
      <ul className="hidden  text-xl font-bold xs:flex ">
        {ITEMS.map((item, index) => {
          return (
            <li key={index} className="ml-4">
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <DarkModeToggle  />
    </div>
  );
};

export const SpNav = ({ opened }: Props) => {
  return (
    <div
      className={`fixed top-0 right-0 z-10  h-full w-full transform overflow-auto bg-[#E64980] p-6 duration-300  ease-in-out xs:hidden ${
        opened ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className="mt-[109px]">
        {ITEMS.map((item, index) => {
          return (
            <li key={index} className="text-[28px] text-white">
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
