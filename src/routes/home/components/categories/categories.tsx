import { Box, Typography } from '@mui/material';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import { CategoryCard } from 'components/cards/category-card';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { get } from 'lodash';
import { getAllData } from 'services/api/get';
import { CarouselWrapper } from './categories.styles';
import CategorySkeleton from './category.skeleton';

const Categories = () => {
  const fakeArray = new Array(10).fill('');
  const [isInTheEnd, setIsInTheEnd] = useState(false);
  const { data, isLoading, isFetching, isSuccess } = useQuery(
    'categories',
    () => getAllData('/category/list/')
  );

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
          {isSuccess &&
            get(data, 'data.results', []).map(
              (item: { title: string; thumbnail: string }) => (
                <SwiperSlide key={get(item, 'guid').toString()}>
                  <CategoryCard category={item} />
                </SwiperSlide>
              )
            )}
          {isFetching &&
            fakeArray.map((item, index) => (
              <SwiperSlide key={(item + index).toString()}>
                <CategorySkeleton />
              </SwiperSlide>
            ))}
        </Swiper>
        <CarouselWrapper isInTheEnd={isInTheEnd} />
      </Box>
    </Box>
  );
};

export default Categories;
