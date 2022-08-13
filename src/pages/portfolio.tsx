import type { NextPage } from 'next';
import { Layout } from 'src/components/layouts';
import { PortfolioItem } from 'src/components/Porfolio/PortfolioItem';

const Portfolio: NextPage = () => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-md  px-4 xs:px-0">
        <div className="mt-10 mb-20">
          <h2 className="mb-5 text-[26px] font-bold">Portfolio</h2>
          <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>
          <PortfolioItem/>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
