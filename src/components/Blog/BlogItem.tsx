const ITEMS = [
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
  {
    title: 'This is a header',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit officia consequat duis enim velit mollit.',
    createdAt: '2022.07.11',
  },
];

type Props = {
  quantity: number;
};

export const BlogItem = ({quantity}:Props) => {
  return (
    <>
      {ITEMS.slice(0,quantity).map((item, index) => {
        return (
          <div className="mb-6" key={index}>
            <h3 className="mb-2 text-[22px] font-bold text-m_dark-6">
              {item.title}
            </h3>
            <p className="mb-2 text-base text-m_dark-6 line-clamp-2">
              {item.description}
            </p>
            <p className="text-xs font-bold text-m_dark-2">{item.createdAt}</p>
          </div>
        );
      })}
    </>
  );
};
