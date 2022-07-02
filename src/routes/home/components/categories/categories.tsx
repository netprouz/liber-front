import { Box, Typography } from '@mui/material';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoryCard } from 'components/cards/category-card';
import React, { useState } from 'react';
import { CarouselWrapper } from './categories.styles';

const categories = [...Array(10).keys()];

const Categories = () => {
  const [isInTheEnd, setIsInTheEnd] = useState(false);
  return (
    <Box>
      <Typography
        marginBottom="2rem"
        variant="h4"
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: {
            fontSize: '24px',
            fontWeight: 700,
          },
        })}
      >
        Рукнлар
      </Typography>
      <Box position="relative">
        <Swiper
          spaceBetween={16}
          // onSlideChange={(swiper) => console.log(swiper)}
          onReachBeginning={() => setIsInTheEnd(false)}
          onReachEnd={() => setIsInTheEnd(true)}
          slidesPerView={6}
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
          {categories.map((cat) => (
            <SwiperSlide key={cat.toString()}>
              <CategoryCard />
            </SwiperSlide>
          ))}
        </Swiper>
        <CarouselWrapper isInTheEnd={isInTheEnd} />
      </Box>
    </Box>
  );
};

export default Categories;
