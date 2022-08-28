import type { NextPage, GetStaticProps } from 'next';
import { Layout } from 'src/layout/Layout';
import { BlogDetail } from 'src/components/Blog/BlogDetail';
import { client } from 'src/lib/client';

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogId = params!.id;
  let blogItem = '';
  let blogState = 0;
  // blogデータ取得
  const blogRes = await client
    .get({
      endpoint: 'blog',
      contentId: blogId,
    })
    .then((res) => {
      blogItem = res;
      blogState = 1;
    })
    .catch((res) => {
      blogItem = '';
      blogState = 2;
    });

  return {
    props: {
      blogItem,
      blogState,
    },
    revalidate: 60 * 10,
  };
};

const Blog: NextPage = ({ blogItem,blogState }: any) => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-md  px-4 xs:px-0">
        <div className="mt-10 mb-16">
          {blogState === 1 ? (
            <BlogDetail
              title={blogItem.title}
              description={blogItem.description}
              createdAt={blogItem.createdAt}
            />
          ) : blogState === 2 ? (
            <div className="rounded-md border-2 border-m_pink-3 bg-m_pink-3 p-4 text-white">
              ブログはありません
            </div>
          ) : (
            <></>
          ) }
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
