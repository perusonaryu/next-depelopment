import type { NextPage } from 'next';
import { Layout } from 'src/layout';
import { Blog } from 'src/components/Blog';
import { Portfolio } from 'src/components/Porfolio';
import { Github } from 'src/components/Github';
import { Twitter } from 'src/components/Twitter';
import { GetStaticProps } from 'next';
import { client } from 'src/lib/client';
import { Props } from 'src/components/type';

export const getStaticProps: GetStaticProps = async () => {
  // blogデータ取得
  const blogRes = await client.get({
    endpoint: 'blog',
  });
  const blogData = await blogRes.contents;

  return {
    props: {
      blogData,
    },
    revalidate: 60 * 10,
  };
};

const Home: NextPage<Props> = ({ blogData }) => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-md px-4">
        <Blog blogData={blogData} />
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
