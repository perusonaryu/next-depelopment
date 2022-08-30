import { FC } from 'react';
import { Props } from 'src/components/type';
import moment from 'moment';

export const PortfolioItem: FC<Props> = ({ portfolioData }) => {
  return (
    <div className="grid grid-cols-1 gap-1 xs:grid-cols-2 xs:gap-2 md:grid-cols-3 md:gap-3">
      {portfolioData!.map((item, index) => {
        return (
          <div
            className={`mb-10 w-full ${index >= 4 ? 'hidden xs:block' : ''}`}
            key={item.id}
          >
            <div className="mb-4 h-fit w-full">
              <img
                src={item.thumbnail.url}
                alt="thumbnail"
                className="w-full object-cover h-[184px]"
              />
            </div>
            <h3 className="mb-2 text-[22px] font-bold text-m_dark-6">
              {item.title}
            </h3>
            <p className="mb-2 text-base text-m_dark-6 line-clamp-2">
              {item.description}
            </p>
            <p className="text-xs text-m_dark-2">{`${moment(
              item.startDate
            ).format('YYYY.MM')} - ${moment(item.endDate).format(
              'YYYY.MM'
            )}`}</p>
          </div>
        );
      })}
    </div>
  );
};
