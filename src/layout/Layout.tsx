import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Header } from 'src/layout/Header';
import { Footer } from 'src/layout/Footer';
import { Hero } from 'src/components/Hero';

type Body = {
  children: ReactNode;
};

export const Layout: FC<Body> = (props) => {
  return (
    <>
      <Head>
        <title>Shimabu IT University</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="relative mt-11 mb-9 box-border min-h-screen pb-[65.5px] text-[#25262B] xs:my-0">
        <Header />
        <Hero />
        <div className="px-4">{props.children}</div>
        <Footer />
      </div>
    </>
  );
};
