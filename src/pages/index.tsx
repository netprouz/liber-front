import Main from 'layouts/main';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import HomeRoute from 'routes/home'
// const HomeRoute = dynamic(() => import('routes/home'));

const Home: NextPage = () => (
  <Main>
    <Head>
      <title>Liber</title>
    </Head>
    <HomeRoute />
  </Main>
);

export default Home;
