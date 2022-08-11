import { BlogItem } from 'src/components/Blog/BlogItem';

export const Blog = () => {
  return (
    <div className="m-auto max-w-screen-md px-4 xs:px-0 mb-[61px] xs:mb-[101px]">
      <h2 className="mb-5 text-[26px] font-bold">Blog</h2>
      <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>
      <BlogItem />
      <div></div>
    </div>
  );
};
