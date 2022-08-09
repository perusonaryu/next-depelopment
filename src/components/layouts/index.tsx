import { FC, ReactNode } from 'react';
import { Header } from 'src/components/Header';

type Body = {
  children: ReactNode;
};

export const Layout: FC<Body> = (props) => {
  return (
    <div className="mt-11 mb-9 xs:my-5 text-[#25262B]">
        <Header/>
      <div className="flex grow flex-col justify-center">{props.children}</div>
    </div>
  );
};
