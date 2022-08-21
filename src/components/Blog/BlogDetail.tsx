import { blogItemType } from 'src/components/Blog/types';


export const BlogDetail:React.FC<blogItemType> = ({title,description,createdAt}:blogItemType) => {
  return (
    <>
      <h2 className="mb-5 text-[26px] font-bold">{title}</h2>
      <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>
      <p className="mb-2 text-xs font-bold text-m_dark-2">{createdAt}</p>
      <p className="text-base text-m_dark-6 line-clamp-2">
        {description}
      </p>
    </>
  );
};
