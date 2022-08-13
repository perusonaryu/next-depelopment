import type { NextPage } from 'next';
import { Loader } from '@mantine/core';
import { Layout } from 'src/components/layouts';
import { BlogItem } from 'src/components/Blog/BlogItem';

const Blog: NextPage = () => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-md  px-4 xs:px-0">
        <div className="mt-10 mb-16">
          <h2 className="mb-5 text-[26px] font-bold">Blog</h2>
          <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>
          <BlogItem quantity={10} />
          <Loader color="pink" className="m-auto" />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
