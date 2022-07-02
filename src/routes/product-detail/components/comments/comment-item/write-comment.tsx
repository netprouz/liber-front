import { Stack, Typography } from '@mui/material';
import { Button } from 'components/button';
import CustomRating from 'components/custom-rating';
import { Input } from 'components/input';
import React from 'react';
import { CardWrapper } from 'routes/product-detail/layout/card-wrapper';

const WriteComment = () => (
  <CardWrapper>
    <Stack gap="2rem">
      <Typography variant="h5" fontWeight={700}>
        Фикрингиз
      </Typography>
      <CustomRating defaultValue={4} />
      <Input multiline placeholder="Изох" fullWidth />
      <Button sx={{ width: 'max-content' }} variant="contained" size="large">
        Юбориш
      </Button>
    </Stack>
  </CardWrapper>
);

export default WriteComment;
