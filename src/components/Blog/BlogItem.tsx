import Link from 'next/link';

const ITEMS = [
  {
    id: 1,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    id: 2,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    id: 3,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    id: 4,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    id: 5,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    id: 6,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    id: 7,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    id: 8,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    id: 9,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    id: 10,
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
];

type Props = {
  quantity: number;
};

export const BlogItem = ({ quantity }: Props) => {
  return (
    <>
      {ITEMS.slice(0, quantity).map((item, index) => {
        return (
          <Link href="/blog/detail" key={index}>
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
