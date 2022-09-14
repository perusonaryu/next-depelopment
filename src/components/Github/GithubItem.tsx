import Image from 'next/image';
const ITEMS = [
  {
    title: 'lightsound/nexst-tailwind',
    text: 'Next.js starter template.',
  },
  {
    title: 'lightsound/nexst-tailwind',
    text: 'Next.js starter template.',
  },
  {
    title: 'lightsound/nexst-tailwind',
    text: 'Next.js starter template.',
  },
  {
    title: 'lightsound/nexst-tailwind',
    text: 'Next.js starter template.',
  },
  {
    title: 'lightsound/nexst-tailwind',
    text: 'Next.js starter template.',
  },
];

export const GithubItem = () => {
  return (
    <>
      {ITEMS.map((item, index) => {
        return (
          <div className={`mb-10 ${index >= 3 ? 'hidden xs:block' : ''}`} key={index}>
            <h3 className="mb-2 text-lg font-bold">
              {item.title}
            </h3>
            <p className="mb-2 text-base">{item.text}</p>
            <div className="mb-2 flex">
              <p className="mr-5 flex items-center text-xs text-m_dark-2">
                <span className="mr-[5px] flex items-center">
                  <Image
                    src="/github/Star.svg"
                    alt="star icon"
                    width={18}
                    height={18}
                  ></Image>
                </span>
                117
              </p>
              <p className="mr-5 flex items-center text-xs text-m_dark-2">
                <span className="mr-[5px] flex items-center">
                  <Image
                    src="/github/Fork.svg"
                    alt="fork icon"
                    width={18}
                    height={18}
                  ></Image>
                </span>
                117
              </p>
            </div>
            <div className="flex mb-2">
              <span className="h-2 w-[65.5%] rounded-l bg-[#3178C6]"></span>
              <span className="h-2 w-[24.5%] bg-[#F1E05A]"></span>
              <span className="h-2 w-[10%] rounded-r bg-[#EDEDED]"></span>
            </div>
            <ul className="flex list-inside list-disc text-xs">
              <li className="mr-4 text-[#3178C6]">
                <span className="ml-[-10px] mr-1.5 font-bold">
                  TypeScript
                </span>
                <span className="text-m_dark-2">65.5%</span>
              </li>
              <li className="mr-4 text-[#F1E05A]">
                <span className="ml-[-10px] mr-1.5 font-bold">
                  JavaScript
                </span>
                <span className="text-m_dark-2">24.5%</span>
              </li>
              <li className="mr-4 text-[#EDEDED]">
                <span className="ml-[-10px] mr-1.5 font-bold">
                  Other
                </span>
                <span className="text-m_dark-2">10%</span>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};
