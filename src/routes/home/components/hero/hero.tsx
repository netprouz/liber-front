import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import { isMobile } from 'routes/home/mobile.type';
import { HeroCarousel } from '../carousel';
import { SwiperWrapper } from '../carousel/carousel.styles';
import { Subscription } from '../subscribe';
import { HeroWrapper } from './hero.styles';

const Hero: React.FC<isMobile> = ({ isNotMobile }) => {

  return (
    <Grid container columnGap="1.5rem" margin="1rem 0" width="100%">
      <Grid item lg={9} width="100%" order={!isNotMobile ? "2" : "1"}>
        <HeroWrapper isNotMobile={isNotMobile}>
          <Stack direction={!isNotMobile ? "column" : "row"} justifyContent="space-between" >
            <Typography width={!isNotMobile ? "100%" : "25rem"} variant="h5" fontWeight={700}>
              Кўп ўқилаётганлар
            </Typography>
            {isNotMobile ? <HeroCarousel />
              :
              <SwiperWrapper>
                <HeroCarousel isNotMobile={isNotMobile}/>
              </SwiperWrapper>}
          </Stack>
        </HeroWrapper>
      </Grid >
      <Grid item lg={2.7} width={"100%"} order={!isNotMobile ? "1" : "2"}>
        <Subscription />
      </Grid>
    </Grid >
  )

}
export default Hero
