import type { NextPage } from 'next';
import { Layout } from 'src/components/layouts';
import { BlogItem } from 'src/components/Blog/BlogItem';
import { BlogDetail } from 'src/components/Blog/BlogDetail';

const Blog: NextPage = () => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-md  px-4 xs:px-0">
        <div className="mt-10 mb-16">
          <BlogDetail />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
