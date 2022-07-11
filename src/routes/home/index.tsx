import { Container, useMediaQuery, useTheme } from '@mui/material';
import { get } from 'lodash';
import dynamic from 'next/dynamic';
import React from 'react';
import { useQuery } from 'react-query';
import { getAllData } from 'services/api/get';
import { Categories } from './components/categories';
import { Features } from './components/features';
import { Links } from './components/links';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hero: any = dynamic(() => import('./components/hero'));
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCarousel: any = dynamic(
  () => import('./components/product-carousel')
);

const Home = () => {
  const theme = useTheme();
  const isnotmobile: boolean = useMediaQuery(theme.breakpoints.up('md'));

  // FETCHING //--------------------------------------------------------------
  const { data, isLoading, isFetching, isSuccess } = useQuery('books', () =>
    getAllData('/book/list/')
  );
  // FETCHING ----------------------------------------------------------------

  // GETTING AUDIO BOOKS //---------------------------------------------------
  const audioBooks = get(data, 'data.results', []).filter(
    (item: { types: [] }) =>
      item.types.map(
        (type: { book_type: string }) => type.book_type === 'audio'
      )
  );
  const responseForAudio = {
    data: { count: audioBooks.length, results: audioBooks },
  };
  // GETTING AUDIO BOOKS -----------------------------------------------------

  return (
    <>
      {isnotmobile && <Links />}
      <Container maxWidth="lg">
        <Hero isnotmobile={isnotmobile} />
        <Features />
        <Categories />
        <ProductCarousel
          title="Янги қўшилганлар"
          response={data}
          {...{ isLoading, isFetching, isSuccess }}
        />
        <ProductCarousel
          title="Аудио китоблар"
          response={responseForAudio}
          {...{ isLoading, isFetching, isSuccess }}
        />
      </Container>
    </>
  );
};

export default Home;
