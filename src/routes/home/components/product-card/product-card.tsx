import React from 'react';
import DefaultImage from 'assets/png/default.png';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { ProductCardImage, ProductCardWrapper } from './product-card.styles';

const ProductCard = () => {
  const theme = useTheme();
  const isnotmobile = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <ProductCardWrapper>
      <ProductCardImage src={DefaultImage.src} isnotmobile={isnotmobile} />
      <Typography variant="h6" fontWeight={!isnotmobile ? 700 : 400}>
        1984
      </Typography>
    </ProductCardWrapper>
  );
};

export default ProductCard;
