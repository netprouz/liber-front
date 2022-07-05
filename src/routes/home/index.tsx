import { Container, useMediaQuery, useTheme } from '@mui/material';
import { get } from 'lodash';
import dynamic from 'next/dynamic';
import React from 'react';
import { useQuery } from 'react-query';
import { getAllData } from 'services/api/get';
import { Categories } from './components/categories';
import { Features } from './components/features';
import { Links } from './components/links';

const Hero: any = dynamic(() => import('./components/hero'));
const ProductCarousel: any = dynamic(
  () => import('./components/product-carousel')
);

const Home = () => {
  const theme = useTheme();
  const isnotmobile: boolean = useMediaQuery(theme.breakpoints.up('md'));

  const { data, isLoading, isFetching, isSuccess } = useQuery('books', () =>
    getAllData('/book/list/')
  );
  const audioBooks = get(data, 'data.results', []).filter(
    (item: { types: [] }) =>
      item.types.map(
        (type: { book_type: string }) => type.book_type === 'audio'
      )
  );
  const responseForAudio = {
    data: { count: audioBooks.length, results: audioBooks },
  };

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
