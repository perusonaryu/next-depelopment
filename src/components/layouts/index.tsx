import { FC, ReactNode } from 'react';
import { Header } from 'src/components/Header';

type Body = {
  children: ReactNode;
};

export const Layout: FC<Body> = (props) => {
  return (
    <div className="mt-11 mb-9  text-[#25262B] xs:my-0">
      <Header />
      <div>{props.children}</div>
    </div>
  );
};
