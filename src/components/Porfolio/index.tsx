import { FC } from "react";
import { NextLink } from '@mantine/next';
import { PortfolioItem } from "src/components/Porfolio/PortfolioItem";
import { Button } from '@mantine/core';
export const Portfolio:FC = () => {
  return (
    <div className="mb-[61px] xs:mb-[101px]">
      <h2 className="mb-5 text-[26px] font-bold">Portfolio</h2>
      <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>

      <PortfolioItem/>
      <Button
        component={NextLink}
        href="/portfolio"
        color="dark"
        radius="xl"
        className="mx-auto block h-[45px] w-[105px] text-base"
      >
        View ALL
      </Button>
    </div>
  );
};
