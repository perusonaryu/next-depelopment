import type { NextPage } from 'next';
import { Layout } from 'src/layout';
import { Blog } from 'src/components/Blog';
import { Portfolio } from 'src/components/Porfolio';
import { Github } from 'src/components/Github';
import { Twitter } from 'src/components/Twitter';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-md px-4">
        <Blog />
        <Portfolio />
        <div className="grid grid-cols-1 xs:grid-cols-2 xs:gap-20">
          <Github />
          <Twitter />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
