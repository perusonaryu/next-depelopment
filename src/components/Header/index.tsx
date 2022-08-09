import { FC } from 'react';

export const Header: FC = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl m-auto flex justify-between">
        <h2 className="italic font-bold text-xl">RYU IT University</h2>

        <ul className="flex font-bold text-xl">
          <li className="mx-2">About</li>
          <li className="mx-2">Blog</li>
          <li className="mx-2">Portfolio</li>
          <li className="mx-2">Contact</li>
        </ul>
      </div>
    </header>
  );
};
