import React from 'react';
import { Grid, Stack, Typography } from '@mui/material';
import { isMobile } from 'routes/home/mobile.type';
import { HeroCarousel } from '../carousel';
import { SwiperWrapper } from '../carousel/carousel.styles';
import { Subscription } from '../subscribe';
import { HeroWrapper } from './hero.styles';

const Hero: React.FC<isMobile> = ({ isnotmobile }) => (
  <Grid container columnGap="1.5rem" margin="1rem 0" width="100%">
    <Grid item lg={9} width="100%" order={!isnotmobile ? '2' : '1'}>
      <HeroWrapper isnotmobile={isnotmobile}>
        <Stack
          direction={!isnotmobile ? 'column' : 'row'}
          justifyContent="space-between"
        >
          <Typography
            width={!isnotmobile ? '100%' : '17rem'}
            variant="h5"
            fontWeight={700}
          >
            Кўп ўқилаётганлар
          </Typography>
          {isnotmobile ? (
            <HeroCarousel />
          ) : (
            <SwiperWrapper>
              <HeroCarousel isnotmobile={isnotmobile} />
            </SwiperWrapper>
          )}
        </Stack>
      </HeroWrapper>
    </Grid>
    <Grid item lg={2.7} width="100%" order={!isnotmobile ? '1' : '2'}>
      <Subscription />
    </Grid>
  </Grid>
);
export default Hero;
