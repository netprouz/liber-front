import { FilterProvider } from 'context/filter';
import Main from 'layouts/main';
import { NextPage } from 'next';
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
export default Filter;
