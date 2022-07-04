import { Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Default from 'assets/png/default.png';
import StarIcon from 'components/icons/star.icon';
import { COLORS } from 'config/styles-config';
import { SmallProductCardImage } from './small-product.card.styles';

interface SavedProps {
  isSavedTabs?: boolean;
  isnotmobile?: boolean;
}

const SmallProductCard: React.FC<SavedProps> = ({
  isSavedTabs,
  isnotmobile,
}) => (
  <Grid
    container
    columnSpacing={5}
    flexWrap={isnotmobile ? 'wrap' : 'nowrap'}
    sx={{ width: isSavedTabs ? '300' : 'auto' }}
  >
    <Grid item xs={isSavedTabs ? 4 : 5}>
      <SmallProductCardImage>
        <Image src={Default} alt="product_image" layout="fill" />
      </SmallProductCardImage>
    </Grid>
    <Grid item xs={isSavedTabs ? 8 : 7}>
      <Stack flexWrap="wrap" gap="0.5rem">
        <Typography fontSize="18px" fontWeight={600}>
          Элжернга аталган гуллар
        </Typography>
        <Typography variant="subtitle2" color="primary">
          SIYOSAT, FANTASTIKA
        </Typography>
        <Stack direction="column" gap="12px">
          <Stack direction="row" gap="12px">
            <StarIcon color={COLORS.secondary} />
            <Typography fontSize="18px" fontWeight={600} color="secondary">
              4.7
            </Typography>
          </Stack>

          <Typography fontSize="18px" fontWeight={600} color={COLORS.disabled}>
            244 фиклар
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  </Grid>
);

export default SmallProductCard;
