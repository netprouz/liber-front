import { Box } from '@mui/material';
import { ProductCard } from 'components/cards/product-card';
import * as React from 'react';
import BookTabs from '../components/books-tab';

const Books: React.FC<{ isnotmobile: boolean }> = ({ isnotmobile }) => {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <>
      <BookTabs {...{ value, handleChange, isnotmobile }} />
      <Box sx={{ margin: '30px 0' }}>
        <ProductCard horizontal />
      </Box>
    </>
  );
};
export default Books;
