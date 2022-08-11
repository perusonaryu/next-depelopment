import { FC, useState } from 'react';
import { Burger } from '@mantine/core';
import Link from 'next/link';
import { Nav, SpNav } from 'src/components/Nav';

export const Header: FC = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  return (
    <>
      <header className="relative w-full">
        <Burger
          opened={opened}
          onClick={() => {
            setOpened((o) => !o)

        }}
          title={title}
          className="absolute top-[25%] left-4 xs:hidden z-20 text-white"
          color={opened ? '#fff' : '#25262B'}
        />
        <div className="mx-4 flex h-[65px] max-w-7xl items-center justify-center px-2 xs:m-auto xs:justify-between">
          <h2 className="text-lg font-bold">
            <Link href="/">RYU IT University</Link>
          </h2>

          <Nav />
        </div>
        <img
          className="absolute top-[25%] right-4 xs:hidden"
          src="/icons/darkModeIcon.svg"
          alt="dark mode icon"
          width={34}
          height={34}
        />
      </header>
      <SpNav opened={opened} />
    </>
  );
};
