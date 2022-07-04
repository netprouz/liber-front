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

const Home: React.FC<{ response?: [] }> = ({ response }) => {
  const theme = useTheme();
  const isnotmobile: boolean = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      {isnotmobile && <Links />}
      <Container maxWidth="lg">
        <Hero isnotmobile={isnotmobile} />
        <Features />
        <Categories />
        <ProductCarousel title="Янги қўшилганлар" response={response} />
        <ProductCarousel title="Аудио китоблар" response={response} />
      </Container>
    </>
  );
};

export default Home;
