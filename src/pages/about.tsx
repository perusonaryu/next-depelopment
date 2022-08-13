import type { NextPage } from 'next';
import { Layout } from 'src/components/layouts';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="m-auto max-w-screen-md  px-4 xs:px-0">
        <div className="mt-10 mb-[61px] xs:mb-[101px]">
          <h2 className="mb-5 text-[26px] font-bold">About</h2>
          <div className="mb-6 w-full border-b-2 border-b-m_gray-2"></div>
          <div>
            <h3 className="text-[22px] mb-6 font-bold">Lightsound Shimabu</h3>
            <p className="font-base">
              ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
