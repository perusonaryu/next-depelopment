import { FC } from 'react';
import { NextLink } from '@mantine/next';
import { Button } from '@mantine/core';
import { TwitterItem } from 'src/components/Twitter/TwitterItem';
import { Props } from 'src/components/type';

export const Twitter: FC<Props> = ({twitterData}) => {
  return (
    <div className="mb-[61px]">
      <h2 className="mb-5 text-[26px] font-bold">Twitter</h2>
      <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>
      <TwitterItem twitterData={twitterData} />
      <Button
        component={NextLink}
        href="/"
        color="dark"
        radius="xl"
        className="mx-auto mt-[-1px] block h-[45px] w-[164px] text-base"
      >
        View ALL
      </Button>
    </div>
  );
};
