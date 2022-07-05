import React from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
import Placeholder from 'assets/png/placeholder.png';
import { get } from 'lodash';
import { CategoryCardWrapper, CategoryTitle } from './category-card.styles';

interface ICategory {
  category: {
    title: string;
    thumbnail: string;
  };
}

const CategoryCard: React.FC<ICategory> = ({ category }) => (
  <CategoryCardWrapper>
    <Image
      src={get(category, 'thumbnail') || Placeholder}
      alt={get(category, 'title')}
      layout="fill"
    />
    <CategoryTitle>
      <Typography
        fontWeight={600}
        color="white"
        variant="subtitle1"
        fontSize="18px"
      >
        {get(category, 'title')}
      </Typography>
    </CategoryTitle>
  </CategoryCardWrapper>
);

export default CategoryCard;
