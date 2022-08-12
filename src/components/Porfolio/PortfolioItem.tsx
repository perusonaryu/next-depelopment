const ITEMS = [
  {
    title: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    productionPeriod: '2021.10 - 2021.12',
  },
  {
    title: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    productionPeriod: '2021.10 - 2021.12',
  },
  {
    title: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    productionPeriod: '2021.10 - 2021.12',
  },
  {
    title: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    productionPeriod: '2021.10 - 2021.12',
  },
  {
    title: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    productionPeriod: '2021.10 - 2021.12',
  },
  {
    title: 'IT KINGDOM',
    description:
      '当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。',
    productionPeriod: '2021.10 - 2021.12',
  },
];

export const PortfolioItem = () => {
  return (
    <div className="grid grid-cols-1 gap-1 xs:grid-cols-2 xs:gap-2 md:grid-cols-3 md:gap-3">
      {ITEMS.map((item, index) => {
        return (
          <div
            className={`mb-10 w-full ${index >= 4 ? 'hidden xs:block' : ''}`}
            key={index}
          >
            <div className="mb-4 h-fit w-full">
              <img
                src="/thumbnail/Thumbnail.png"
                alt="thumbnail"
                className="w-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-[22px] font-bold text-m_dark-6">
              IT KINGDOM
            </h3>
            <p className="mb-2 text-base text-m_dark-6">
              当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
            </p>
            <p className="text-xs text-m_dark-2">2021.10 - 2021.12</p>
          </div>
        );
      })}
    </div>
  );
};
