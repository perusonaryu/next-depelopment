import { ListItem } from '@mantine/core';
import { SelectItems } from '@mantine/core/lib/components/Select/SelectItems/SelectItems';
import Image from 'next/image';
import Link from 'next/link';

const ICONS = [
  {
    href: '/icons/Twitter.svg',
    alt: 'twitter icon',
  },
  {
    href: '/icons/Facebook.svg',
    alt: 'facebook icon',
  },
  {
    href: '/icons/RSS.svg',
    alt: 'RSS icon',
  },
];

export const Hero = () => {
  return (
    <div className="flex px-4 mb-20 h-[248px] w-full items-center justify-center bg-m_pink-6 text-white">
      <div className="block xs:flex w-full max-w-screen-md items-center justify-between">
        <div className='mb-[44px] xs:mb-0'>
          <h1 className="text-4xl font-bold">Ryu IT University</h1>
          <p className="text-base">りゅうのポートフォリオのためのページです</p>
        </div>
        <div className="flex">
          {ICONS.map((icon, index) => {
            return (
              <Link href="/" key={index}>
                <a className="mr-3">
                  <Image
                    src={icon.href}
                    alt={icon.alt}
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
