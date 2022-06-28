import { Stack, Typography } from '@mui/material';
import HeartIcon from 'components/icons/heart.icon';
import React from 'react';
import { SubscribeButton, SubscribeWrapper } from './subscribe.styles';

const Subscribe = () => (
  <SubscribeWrapper>
    <Stack justifyContent="space-between" height="100%" spacing={2}>
      <Stack gap="2rem">
        <Typography color="white" variant="h5">
          Китоб ўқишни ёқтирасизми?
        </Typography>
        <Typography fontSize="18px" color="white">
          Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг
        </Typography>
      </Stack>
      <SubscribeButton
        startIcon={<HeartIcon />}
        size="large"
        fullWidth
      >
        Обуна бўлиш
      </SubscribeButton>
    </Stack>
  </SubscribeWrapper>
);

export default Subscribe;
