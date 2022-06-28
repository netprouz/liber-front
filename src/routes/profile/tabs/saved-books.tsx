import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { SmallProductCard } from 'routes/product-detail/components/small-product-card';
import { Title } from './styles/tabs-title.style';

const SavedBooks = () => {
  return (
    <Box>
      <Title>Сақланганлар</Title>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <SmallProductCard isSavedTabs />
        </Grid>
        <Grid item xs={6}>
          <SmallProductCard isSavedTabs />
        </Grid>
        <Grid item xs={6}>
          <SmallProductCard isSavedTabs />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SavedBooks;
