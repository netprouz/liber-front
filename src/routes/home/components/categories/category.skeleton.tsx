import { Skeleton, Stack } from '@mui/material';
import React from 'react';

const CategorySkeleton = () => (
  <div>
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="235px"
      height="164px"
      sx={{ borderRadius: '14px' }}
    />
  </div>
);

export default CategorySkeleton;
