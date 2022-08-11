import Link from 'next/link';

const items = [
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
    <ul className="hidden  text-xl font-bold xs:flex ">
      {items.map((item, index) => {
        return (
          <li key={index} className="ml-4">
            <Link href={item.href}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export const SpNav = ({ opened }: Props) => {
  return (
    <div
      className={`xs:hidden fixed top-0 right-0  z-10 h-full w-full transform overflow-auto bg-[#E64980] p-6  duration-300 ease-in-out ${
        opened ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className="mt-[109px]" >
        {items.map((item, index) => {
          return (
            <li key={index} className="text-white text-[28px]">
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
