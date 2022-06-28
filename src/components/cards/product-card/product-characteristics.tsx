import { Stack, Typography } from '@mui/material';
import { COLORS } from 'config/styles-config';
import React from 'react';

interface ProductCharacteristicsProps {
  name: string;
  value: string;
}

const ProductCharacteristics: React.FC<ProductCharacteristicsProps> = ({
  name,
  value,
}) => (
  <Stack gap="0.5rem">
    <Typography variant="subtitle2" color={COLORS.disabled}>
      {name}
    </Typography>
    <Typography variant="subtitle1" fontSize="18px">
      {value}
    </Typography>
  </Stack>
);

export default ProductCharacteristics;
