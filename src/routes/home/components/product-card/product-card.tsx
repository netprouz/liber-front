import React from 'react';
import DefaultImage from 'assets/png/default.png';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import { get } from 'lodash';
import { ProductCardImage, ProductCardWrapper } from './product-card.styles';

const ProductCard = ({
  books,
}: {
  books: { title: string; thumbnail: string };
}) => {
  const theme = useTheme();
  const isnotmobile = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <ProductCardWrapper>
      <ProductCardImage
        src={get(books, 'book.thumbnail') || DefaultImage.src}
        isnotmobile={isnotmobile}
      />
      <Typography variant="h6" fontWeight={!isnotmobile ? 700 : 400}>
        {get(books, 'book.title')}
      </Typography>
    </ProductCardWrapper>
  );
};

export default ProductCard;
