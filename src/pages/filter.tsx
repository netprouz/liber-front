import { FilterProvider } from 'context/filter';
import Main from 'layouts/main';
import { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import FilterPage from 'routes/filter';

const Filter: NextPage = () => (
  <Main>
    <Head>
      <title>Filter</title>
    </Head>
    <FilterProvider>
      <FilterPage />
    </FilterProvider>
  </Main>
);

// export const getStaticProps: GetStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale as string, ['common'])),
//     // Will be passed to the page component as props
//   },
// });
export default Filter;
