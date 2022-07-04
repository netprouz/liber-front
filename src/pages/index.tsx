import Main from 'layouts/main';
import type { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
/* eslint-disable import/no-unresolved */
import 'swiper/css';
/* eslint-disable import/no-unresolved */
import 'swiper/css/navigation';
/* eslint-disable import/no-unresolved */
import 'swiper/css/pagination';
import { dehydrate, QueryClient } from 'react-query';
import { get } from 'lodash';
import axios from 'axios';

const HomeRoute: any = dynamic(() => import('routes/home'));

const Home: NextPage = (props) => {
  const response = get(props, 'dehydratedState.queries[0].state');
  console.log(response);
  return (
    <Main>
      <Head>
        <title>Liber</title>
      </Head>
      <HomeRoute response={response} />
    </Main>
  );
};

const getAllBooks = async () => {
  const { data } = await axios.get('http://157.245.104.91/api/v1/book/list/');
  return JSON.parse(JSON.stringify(data));
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('booksList', getAllBooks);
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
      // Will be passed to the page component as props
      dehydratedState: dehydrate(queryClient),
    },
  };
};
export default Home;
