import { Container, useMediaQuery, useTheme } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react';
import { Categories } from './components/categories';
import { Features } from './components/features';
import { Links } from './components/links';

const Hero: any = dynamic(() => import('./components/hero'));
const ProductCarousel: any = dynamic(
  () => import('./components/product-carousel')
);
const Home = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      {isNotMobile && <Links />}
      <Container maxWidth="lg">
        <Hero isNotMobile={isNotMobile} />
        <Features />
        <Categories />
        <ProductCarousel title="Янги қўшилганлар" />
        <ProductCarousel title="Аудио китоблар" />
      </Container>
    </>
  );
};

export default Home;
