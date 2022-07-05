import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ArrowIcon from 'components/icons/arrow.icon';
import { COLORS } from 'config/styles-config';
import { useQuery } from 'react-query';
import { isMobile } from 'routes/home/mobile.type';
import { getAllData } from 'services/api/get';
import { get } from 'lodash';
import HeroSkeleton from './hero.skeleton';
import { HeroProductCard } from '../product-card';
import { SlideNav } from './carousel.styles';

SwiperCore.use([Navigation]);

const Carousel: React.FC<isMobile> = ({ isnotmobile }) => {
  const { data, isLoading, isFetching, isSuccess } = useQuery(
    'recommendation',
    () => getAllData('/book/recommendation/list/')
  );
  const fakeArray = new Array(10).fill('');

  return (
    <Swiper
      spaceBetween={20}
      key="categoryCarousel"
      slidesPerView={3}
      navigation={{
        prevEl: '.slider-prev',
        nextEl: '.slider-next',
      }}
      breakpoints={{
        // when window width is >= 640px
        300: {
          // width: 640,
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        // when window width is >= 768px
        400: {
          // width: 768,
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        500: {
          // width: 768,
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        600: {
          // width: 768,
          slidesPerView: 2.2,
          spaceBetween: 20,
        },
        700: {
          // width: 768,
          slidesPerView: 2.2,
        },
        768: {
          // width: 768,
          slidesPerView: 2.2,
        },
        920: {
          // width: 768,
          slidesPerView: 2.2,
        },
        1024: {
          // width: 768,
          slidesPerView: 3,
        },
      }}
    >
      {isSuccess &&
        get(data, 'data.results').map(
          (item: { title: string; thumbnail: string }, guid: string) => (
            <SwiperSlide key={get(item, 'guid').toString()}>
              <HeroProductCard books={item} />
            </SwiperSlide>
          )
        )}
      {isFetching &&
        fakeArray.map((item, index) => (
          <SwiperSlide key={(item + index).toString()}>
            <HeroSkeleton />
          </SwiperSlide>
        ))}
      {!isFetching &&
        !isSuccess &&
        fakeArray.map((item, index) => (
          <SwiperSlide key={(item + index).toString()}>
            <HeroSkeleton />
          </SwiperSlide>
        ))}
      {isnotmobile && (
        <>
          <SlideNav className="slider-prev">
            <ArrowIcon color={COLORS.white} />
          </SlideNav>
          <SlideNav className="slider-next">
            <ArrowIcon
              color={COLORS.white}
              style={{ transform: 'rotate(180deg)' }}
            />
          </SlideNav>
        </>
      )}
    </Swiper>
  );
};

export default Carousel;
