import { Grid, Stack, Typography } from '@mui/material';
import CustomRating from 'components/custom-rating';
import React from 'react';
import { CardWrapper } from '../../../layout/card-wrapper';
import RatingItem from './rating-item';

const CommentDetails = () => (
  <CardWrapper>
    <Grid columnSpacing={4} container>
      <Grid item xs={4}>
        <Stack gap="14px">
          <Typography variant="h5" fontWeight={700}>
            Рейтинг
          </Typography>
          <Typography fontSize="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stack gap="1rem">
          <RatingItem title={5} value={86} />
          <RatingItem title={4} value={61} />
          <RatingItem title={3} value={12} />
          <RatingItem title={2} value={5} />
          <RatingItem title={1} value={8} />
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Stack height="100%" justifyContent="center" alignItems="center">
          <Stack justifyContent="center">
            <Typography variant="h4" fontWeight={700}>
              4.7
            </Typography>
            <CustomRating defaultValue={4} />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  </CardWrapper>
);
export default CommentDetails;
