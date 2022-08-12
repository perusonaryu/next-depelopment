import type { NextPage } from 'next';
import { Layout } from 'src/components/layouts';
import { Hero } from 'src/components/Hero';
import { Blog } from 'src/components/Blog';
import { Portfolio } from 'src/components/Porfolio';

const Home: NextPage = () => {

  return (
    <Layout>
      <Hero/>
      <Blog/>
      <Portfolio/>
    </Layout>
  );
};

export default Home;
