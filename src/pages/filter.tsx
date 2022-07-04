import axios from 'axios';
import { FilterProvider } from 'context/filter';
import Main from 'layouts/main';
import { get } from 'lodash';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import React from 'react';
import { dehydrate, QueryClient } from 'react-query';
import FilterPage from 'routes/filter';

const Filter: NextPage = (props: any) => {
  const response = get(props, 'dehydratedState.queries[0].state', []);
  return (
    <Main>
      <Head>
        <title>Filter</title>
      </Head>
      <FilterProvider>
        <FilterPage response={response} />
      </FilterProvider>
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

export default Filter;
