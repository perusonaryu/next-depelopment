import type { NextPage } from 'next';
import { Layout } from 'src/layout';
import { Blog } from 'src/components/Blog';
import { Portfolio } from 'src/components/Porfolio';
import { Github } from 'src/components/Github';
import { Twitter } from 'src/components/Twitter';
import { GetStaticProps } from 'next';
import { client } from 'src/lib/client';
import { Props } from 'src/components/type';
import { TwitterApi } from 'twitter-api-v2';

export const getStaticProps: GetStaticProps = async () => {
  
  const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN || '');
  const readOnlyClient = twitterClient.readOnly;
  const { data } = await readOnlyClient.v2.userByUsername(process.env.TWITTER_USER_NAME || '');
  // Twitter userID取得
  const twitterUserId = data.id; 
  // Tweet取得
  const { tweets, includes } = await readOnlyClient.v2.userTimeline(data.id, {
    'tweet.fields': ['created_at'],
    'user.fields': ['name', 'profile_image_url', 'username'],
    expansions: ['author_id'],
    max_results: 5,
  });
  const twitterData = { userInfo: data, tweets: tweets };

  // blogデータ取得
  const blogRes = await client.get({
    endpoint: 'blog',
  });
  const blogData = await blogRes.contents;

  // portfolioデータ取得
  const portfolioRes = await client.get({
    endpoint: 'portfolio',
  });
  const portfolioData = await portfolioRes.contents;

  return {
    props: {
      blogData,
      portfolioData,
      twitterData,
    },
    revalidate: 60 * 10,
  };
};

const Home: NextPage<Props> = ({ blogData, portfolioData, twitterData }) => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-md px-4">
        <Blog blogData={blogData} />
        <Portfolio portfolioData={portfolioData} />
        <div className="grid grid-cols-1 xs:grid-cols-2 xs:gap-20">
          <Github />
          <Twitter twitterData={twitterData} />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
