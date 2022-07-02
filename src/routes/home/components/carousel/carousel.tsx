import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import ArrowIcon from 'components/icons/arrow.icon';
import { COLORS } from 'config/styles-config';
import { isMobile } from 'routes/home/mobile.type';
import { HeroProductCard } from '../product-card';
import { SlideNav } from './carousel.styles';

SwiperCore.use([Navigation]);

const Carousel: React.FC<isMobile> = ({ isNotMobile }) => (
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
    <SwiperSlide>
      <HeroProductCard />
    </SwiperSlide>
    <SwiperSlide>
      <HeroProductCard />
    </SwiperSlide>
    <SwiperSlide>
      <HeroProductCard />
    </SwiperSlide>
    <SwiperSlide>
      <HeroProductCard />
    </SwiperSlide>
    <SwiperSlide>
      <HeroProductCard />
    </SwiperSlide>
    {isNotMobile && (
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

export default Carousel;
