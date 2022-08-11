import { FC, ReactNode } from 'react';
import { Header } from 'src/components/Header';

type Body = {
  children: ReactNode;
};

export const Layout: FC<Body> = (props) => {
  return (
    <div className="mt-11 mb-9  xs:my-0 text-[#25262B]">
        <Header/>
      <div>{props.children}</div>
    </div>
  );
};
