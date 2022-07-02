import Main from 'layouts/main';
import type { GetServerSideProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
/* eslint-disable import/no-unresolved */
import 'swiper/css';
/* eslint-disable import/no-unresolved */
import 'swiper/css/navigation';
/* eslint-disable import/no-unresolved */
import 'swiper/css/pagination';

const HomeRoute: any = dynamic(() => import('routes/home'));

const Home: NextPage = () => (
  <Main>
    <Head>
      <title>Liber</title>
    </Head>
    <HomeRoute />
  </Main>
);
export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
  },
});
export default Home;
