import type { NextPage } from 'next';
import { Layout } from 'src/components/layouts';
import { Hero } from 'src/components/Hero';

const Home: NextPage = () => {

  return (
    <Layout>
      <Hero/>
    </Layout>
  );
};

export default Home;
