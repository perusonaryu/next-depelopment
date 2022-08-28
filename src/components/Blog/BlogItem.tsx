import { FC } from 'react';
import Link from 'next/link';
import { Props } from 'src/components/type';

export const BlogItem: FC<Props> = ({ quantity, blogData }) => {
  return (
    <>
      {blogData.slice(0, quantity).map((item, index) => {
        return (
          <Link href={'/blog/detail/' + item.id} key={index}>
            <a>
              <div className="mb-6">
                <h3 className="mb-2 text-[22px] font-bold text-m_dark-6">
                  {item.title}
                </h3>
                <p className="mb-2 text-base text-m_dark-6 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-xs font-bold text-m_dark-2">
                  {item.createdAt}
                </p>
              </div>
            </a>
          </Link>
        );
      })}
    </>
  );
};
