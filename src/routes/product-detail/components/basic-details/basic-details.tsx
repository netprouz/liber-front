import { Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Default from 'assets/png/default.png';
import Image from 'next/image';
import CustomRating from 'components/custom-rating';
import HeadPhoneIcon from 'components/icons/headphone.icon';
import BookmarkIcon from 'components/icons/bookmark.icon';
import ChatIcon from 'components/icons/chat.icon';
import ProductCharacteristics from 'components/cards/product-card/product-characteristics';
import { Button } from 'components/button';
import ShippingIcon from 'components/icons/shipping.icon';
import {
  BasicDetailsWrapper,
  BasicProductImage,
} from './basic-detiails.sytles';
import { isMobile } from 'routes/home/mobile.type';

const BasicDetails: React.FC<isMobile> = ({ isNotMobile }) => (
  <>
    <Grid item xs={3} padding={isNotMobile ? 0 : "0 1rem"} width="100%">
      <BasicProductImage>
        <Image src={Default} alt="product_image" layout="fill" />
      </BasicProductImage>
    </Grid>
    <Grid item xs={9} paddingLeft={isNotMobile ? 0 : "0px!important"} padding={isNotMobile ? 0 : "0 1rem!important"}>
      <BasicDetailsWrapper>
        <Stack
          alignItems="baseline"
          direction={isNotMobile ? "row" : "column"}
          justifyContent="space-between"
          width="100%"
        >
          <Stack width={isNotMobile ? "max-content" : "100%"}>
            <Typography fontWeight={700} variant="h4" fontSize={isNotMobile?"30px":"24px"}>
              Элжернга аталган гуллар
            </Typography>
            <Typography variant="subtitle2" color="primary" marginTop={isNotMobile ? "0" : "10px"}>
              SIYOSAT, FANTASTIKA
            </Typography>
          </Stack>
          <Stack width={isNotMobile ? "fit-content" : "100%"} gap={isNotMobile ? "3rem" : "1rem"} direction={isNotMobile ? "row" : "column"} marginTop={isNotMobile ? "0" : "10px"}>
            <Stack direction="row" gap="1.5rem" justifyContent="space-between">
              <Stack direction="row" gap="1.25rem">
                <HeadPhoneIcon />
                <BookmarkIcon />
              </Stack>
              <CustomRating defaultValue={4} />
              <Typography variant="h5" fontWeight={700}>
                4.0
              </Typography>
            </Stack>
            <Stack alignItems="center" direction="row" gap="12px">
              <ChatIcon />
              <Typography variant="subtitle2"> 235 Фикрлар</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Typography variant="subtitle2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
          inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo.
        </Typography>
        <Stack gap="3rem" direction="row">
          <ProductCharacteristics name="Муаллиф" value="Kevin Smiley" />
          <ProductCharacteristics name="Нашриёт" value="Wepress Inc." />
          <ProductCharacteristics name="Йил" value="1999" />
        </Stack>
      </BasicDetailsWrapper>
      <Stack margin="1.5rem 0" gap="1rem" direction={isNotMobile ? "row" : "column"}>
        <Button
          curved
          size="small"
          startIcon={<ShippingIcon />}
          variant="contained"
        >
          Сотиб олиш - 65 000 сум
        </Button>
        <Button
          curved
          size="small"
          startIcon={<HeadPhoneIcon />}
          variant="outlined"
        >
          Сотиб олиш - 65 000 сум
        </Button>
        <Button
          curved
          size="small"
          startIcon={<BookmarkIcon />}
          variant="outlined"
        >
          Сотиб олиш - 65 000 сум
        </Button>
      </Stack>
    </Grid>
  </>
);

export default BasicDetails;
