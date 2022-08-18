import { FC, useState, useEffect } from 'react';
import { Burger } from '@mantine/core';
import Link from 'next/link';
import { Nav, SpNav } from 'src/layout/Nav';

export const Header: FC = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? 'Close navigation' : 'Open navigation';

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [opened]);

  return (
    <>
      <header className="relative w-full xs:px-[10px]">
        <Burger
          opened={opened}
          onClick={() => {
            setOpened((o) => !o);
          }}
          title={title}
          className="absolute top-[25%] left-4 z-20 text-white xs:hidden"
          color={opened ? '#fff' : '#25262B'}
        />
        <div className="mx-4 flex h-[65px] max-w-screen-md items-center justify-center xs:m-auto xs:justify-between">
          <h2 className="text-lg font-bold">
            <Link href="/">Shimabu IT University</Link>
          </h2>

          <Nav />
        </div>
      </header>
      <SpNav opened={opened} />
    </>
  );
};
