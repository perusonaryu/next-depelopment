import type { NextPage } from 'next';
import { Layout } from 'src/components/layouts';
import { Hero } from 'src/components/Hero';
import { Blog } from 'src/components/Blog';
import { Portfolio } from 'src/components/Porfolio';
// import { Github } from 'src/components/Github';

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <div className='max-w-screen-md m-auto px-4 xs:px-0'>
        <Blog />
        <Portfolio />
        {/* <div className="grid grid-cols-2 gap-2">
          <Github />
        </div> */}
      </div>
    </Layout>
  );
};

export default Home;
