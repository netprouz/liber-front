import { Skeleton, Stack } from '@mui/material';
import React from 'react';

const HeroSkeleton = () => (
  <>
    <Skeleton
      animation="wave"
      variant="rectangular"
      width="100%"
      height="267px"
      sx={{ borderRadius: '14px' }}
    />
    <Skeleton
      animation="wave"
      sx={{ marginTop: '18px' }}
      width="80%"
      height={30}
    />
  </>
);

export default HeroSkeleton;
