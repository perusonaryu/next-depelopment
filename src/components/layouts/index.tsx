import { FC, ReactNode } from 'react';
import { Header } from 'src/components/Header';
import { Footer } from 'src/components/Footer';

type Body = {
  children: ReactNode;
};

export const Layout: FC<Body> = (props) => {
  return (
    <div className="relative min-h-screen mt-11 mb-9 pb-[65.5px] box-border text-[#25262B] xs:my-0">
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};
