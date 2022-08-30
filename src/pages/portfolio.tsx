import type { NextPage } from 'next';
import { Layout } from 'src/layout';
import { PortfolioItem } from 'src/components/Porfolio/PortfolioItem';
import { GetStaticProps } from 'next';
import { client } from 'src/lib/client';
import { Props } from 'src/components/type';

export const getStaticProps: GetStaticProps = async () => {
  // portfolioデータ取得
  const portfolioRes = await client.get({
    endpoint: 'portfolio',
  });
  const portfolioData = await portfolioRes.contents;

  return {
    props: {
      portfolioData,
    },
    revalidate: 60 * 10,
  };
};

const Portfolio: NextPage<Props> = ({portfolioData}:any) => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-md  px-4 xs:px-0">
        <div className="mt-10 mb-20">
          <h2 className="mb-5 text-[26px] font-bold">Portfolio</h2>
          <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>
          <PortfolioItem portfolioData={portfolioData}/>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
