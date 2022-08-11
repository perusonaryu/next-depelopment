import type { NextPage } from 'next';
import { Layout } from 'src/components/layouts';
import { Hero } from 'src/components/Hero';
import { Blog } from 'src/components/Blog';

const Home: NextPage = () => {

  return (
    <Layout>
      <Hero/>
      <Blog/>
    </Layout>
  );
};

export default Home;
