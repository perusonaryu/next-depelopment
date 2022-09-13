import { FC } from 'react';
import { Avatar } from '@mantine/core';
import { Props } from 'src/components/type';
import moment from 'moment';

export const TwitterItem: FC<Props> = ({ twitterData }) => {
  const userInfo = twitterData!.userInfo;
  const tweets = twitterData!.tweets;
  const dateFormat = (date: Date) => {
    let createdAt = moment(date).format('MM月DD日');
    if (createdAt.charAt(0) === '0') {
      createdAt = createdAt.slice(1);
    }
    return createdAt;
  };
  return (
    <>
      {tweets.map((item, index) => {
        return (
          <div className="mb-14 flex" key={item.id}>
            <Avatar
              className="mr-4 rounded-full"
              src={userInfo.profile_image_url}
            />
            <div>
              <div className="flex  items-center">
                <h3 className="mr-2 text-base font-bold  text-m_dark-6">
                  {userInfo.name}
                </h3>
                <p className="text-xs text-m_dark-2">
                  {userInfo.username + '・' + dateFormat(item.created_at)}
                </p>
              </div>
              <p className="text-m_dark-6">
                <span className="mb-4 inline-block">{item.text}</span>
                {/* <span className="mb-4 inline-block">
                  {item.text2}
                </span>
                <span className="mb-4 inline-block">
                  {item.text3}
                </span>
                <span className="inline-block text-m_blue-6">
                  <Link href={item.text4}>
                    <a>{item.text4}</a>
                  </Link>
                </span> */}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
