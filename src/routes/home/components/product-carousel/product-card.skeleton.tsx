import { Skeleton, Stack } from '@mui/material';
import React from 'react';

const ProductCardSkeleton = () => (
  <div>
    <Skeleton
      animation="wave"
      variant="rectangular"
      width="240px"
      height="336px"
      sx={{ borderRadius: '14px' }}
    />
    <Skeleton animation="wave" sx={{ marginTop: '18px' }} height={30} />
    <Skeleton animation="wave" width="60%" />
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Skeleton animation="wave" width="25%" height={30} />
      <Skeleton animation="wave" width="35%" height={30} />
    </Stack>
  </div>
);

export default ProductCardSkeleton;
