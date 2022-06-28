import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import HeartIcon from 'components/icons/heart.icon';
import Note from 'components/note/note';
import { ProductCard } from 'components/cards/product-card';
import { COLORS } from 'config/styles-config';
import { useFilterContext } from 'context/filter';
import React from 'react';
import { SubscribeButton } from 'routes/home/components/subscribe/subscribe.styles';
import Empty from "assets/png/empty.png";
import Image from 'next/image';
import { FilterLayout } from './layout';

const FilterPage = () => {
  const { grid_view } = useFilterContext();
  const products = [...Array(10).keys()];
  return (
    <Box sx={{ backgroundColor: COLORS.gray }}>
      <Container sx={{ padding: '1.5rem 0' }} maxWidth="lg">
        <FilterLayout>
          <Grid columnSpacing={2} rowSpacing={2} container>
            <Grid item xs={12}>
              <Note
                title="Китоб ўқишни ёқтирасизми?"
                description="Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг"
                button={
                  <SubscribeButton
                    sx={{ width: 'max-content' }}
                    startIcon={<HeartIcon />}
                  >
                    Обуна бўлиш
                  </SubscribeButton>
                }
              />
            </Grid>
            {products.length < 1 ? (
              <Grid margin="5rem 0" justifyContent="center" alignItems="center" item xs={12}>
                <Stack alignItems="center">
                  <Image src={Empty} alt="empty" layout="fixed" />
                  <Typography variant="subtitle2" color="disabled">
                    Сизнинг сўровингиз бўйича хечнарса топилмади!
                  </Typography>
                </Stack>
              </Grid>
            ) : (
              products.map((product) => (
                <Grid key={product.toString()} item xs={grid_view ? 3 : 12}>
                  <ProductCard horizontal={!grid_view} />
                </Grid>
              ))
            )}
          </Grid>
        </FilterLayout>
      </Container>
    </Box>
  );
};

export default FilterPage;
