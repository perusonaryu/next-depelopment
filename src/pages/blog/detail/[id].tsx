import { Layout } from 'src/layout/Layout';
import { BlogDetail } from 'src/components/Blog/BlogDetail';
import { ITEMS } from 'src/components/Blog/BlogItemData';
import { blogItemType } from 'src/components/Blog/types';
import { useRouter } from 'next/router';

const Blog = () => {
  const router = useRouter();

  const id = Number(router.query.id);
  const blogItem: blogItemType | undefined = ITEMS.find((item) => {
    return item.id === id;
  });

  return (
    <Layout>
      <div className="m-auto max-w-screen-md  px-4 xs:px-0">
        <div className="mt-10 mb-16">
          {blogItem ? (
            <BlogDetail
              title={blogItem.title}
              description={blogItem.description}
              createdAt={blogItem.createdAt}
            />
          ) : (
            <div className="p-4 border-2 border-m_pink-3 bg-m_pink-3 text-white rounded-md">
              ブログはありません
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
