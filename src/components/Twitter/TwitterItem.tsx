import { Avatar } from '@mantine/core';
import Link from 'next/link';

const ITEMS = [
  {
    accountName: 'しまぶーのIT大学',
    accountId: '@shimabu_it',
    date: '5月25日',
    text1: '📣 新サービス「Noway Form」をリリースしました！',
    text2:'NowayFormは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogleFormsでやっていたことがNotionだけで完結します✌✨',
    text3:'試しに使っていただけると幸いです😊',
    text4:'https://www.noway-form.com/ja',
  },
  {
    accountName: 'しまぶーのIT大学',
    accountId: '@shimabu_it',
    date: '5月25日',
    text1: '📣 新サービス「Noway Form」をリリースしました！',
    text2:'NowayFormは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogleFormsでやっていたことがNotionだけで完結します✌✨',
    text3:'試しに使っていただけると幸いです😊',
    text4:'https://www.noway-form.com/ja',
  },
  {
    accountName: 'しまぶーのIT大学',
    accountId: '@shimabu_it',
    date: '5月25日',
    text1: '📣 新サービス「Noway Form」をリリースしました！',
    text2:'NowayFormは、Notionのデータベースをもとにフォームを作成できるサービスです。これまでGoogleFormsでやっていたことがNotionだけで完結します✌✨',
    text3:'試しに使っていただけると幸いです😊',
    text4:'https://www.noway-form.com/ja',
  },
];

export const TwitterItem = () => {
  return (
    <>
      {ITEMS.map((item, index) => {
        return (
          <div className="mb-14 flex" key={index}>
            <Avatar src="/twitter/avatar.png" />
            <div>
              <div className="flex  items-center">
                <h3 className="mr-2 text-base font-bold  text-m_dark-6">
                  {item.accountName}
                </h3>
                <p className="text-xs text-m_dark-2">
                  {item.accountId}・{item.date}
                </p>
              </div>
              <p className="text-m_dark-6">
                <span className="mb-5 inline-block">
                  {item.text1}
                </span>
                <span className="mb-5 inline-block">
                  {item.text2}
                </span>
                <span className="mb-5 inline-block">
                  {item.text3}
                </span>
                <span className="inline-block text-m_blue-6">
                  <Link href={item.text4}>
                    <a>{item.text4}</a>
                  </Link>
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
