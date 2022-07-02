import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import React, { useRef } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Controller from './controller';

interface ProductCarouselProps {
  title: string;
}

SwiperCore.use([Navigation, Pagination]);

const products = [...Array(10).keys()];

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title }) => {
  const navigationPrevRef = useRef(null);
  const paginationRef = useRef(null);
  const navigationNextRef = useRef(null);
  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{ marginBottom: '2rem' }}>
      <Stack
        margin="2rem 0"
        alignItems="center"
        direction="row"
        justifyContent="space-between"
      >
        <Typography
          variant="h4"
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '24px',
              fontWeight: 700,
            },
          }}
        >
          {title}
        </Typography>
        <Controller
          pagination={paginationRef}
          prevRef={navigationPrevRef}
          nextRef={navigationNextRef}
        />
      </Stack>
      <Swiper
        slidesPerView={5}
        spaceBetween={24}
        // pagination={{
        //   el: paginationRef.current,
        //   clickable: true,
        // }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onInit={(swiper: any) => {
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          // eslint-disable-next-line no-param-reassign
          swiper.params.navigation.nextEl = navigationNextRef.current;
          // eslint-disable-next-line no-param-reassign
          swiper.params.pagination.el = paginationRef.current;
          swiper.navigation.destroy();
          swiper.navigation.init();
          swiper.navigation.update();
          swiper.pagination.destroy();
          swiper.pagination.init();
          swiper.pagination.update();
        }}
        breakpoints={{
          // when window width is >= 640px
          300: {
            // width: 640,
            slidesPerView: 2.5,
          },
          // when window width is >= 768px
          400: {
            // width: 768,
            slidesPerView: 2.5,
          },
          500: {
            // width: 768,
            slidesPerView: 3,
          },
          600: {
            // width: 768,
            slidesPerView: 3.5,
          },
          700: {
            // width: 768,
            slidesPerView: 3,
          },
          768: {
            // width: 768,
            slidesPerView: 3.5,
          },
          920: {
            // width: 768,
            slidesPerView: 4,
          },
          1024: {
            // width: 768,
            slidesPerView: 5,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.toString()}>
            <ProductCard isNotMobile={isNotMobile} />
          </SwiperSlide>
        ))}
        <div className="my-custom-pagination-div" />
      </Swiper>
    </Box>
  );
};

export default ProductCarousel;
