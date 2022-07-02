import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import HeartIcon from 'components/icons/heart.icon';
import Note from 'components/note/note';
import { ProductCard } from 'components/cards/product-card';
import { COLORS } from 'config/styles-config';
import { useFilterContext } from 'context/filter';
import React from 'react';
import { SubscribeButton } from 'routes/home/components/subscribe/subscribe.styles';
import Empty from 'assets/png/empty.png';
import Image from 'next/image';
import { FilterLayout } from './layout';

const FilterPage = () => {
  const { grid_view } = useFilterContext();
  const products = [...Array(10).keys()];

  const theme = useTheme();
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box sx={{ backgroundColor: COLORS.gray }}>
      <Container sx={{ padding: isNotMobile ? '1.5rem 0' : '0' }} maxWidth="lg">
        <FilterLayout isNotMobile={isNotMobile}>
          <Grid
            columnSpacing={2}
            rowSpacing={2}
            container
            paddingLeft={!isNotMobile ? '16px' : 'auto'}
          >
            <Grid
              item
              xs={12}
              paddingLeft={!isNotMobile ? '0!important' : 'auto'}
              width={!isNotMobile ? '94%' : 'auto'}
              margin={!isNotMobile ? '0 auto' : 'auto'}
              order={2}
            >
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
                isNotMobile={isNotMobile}
              />
            </Grid>
            {products.length < 1 ? (
              <Grid
                margin="5rem 0"
                justifyContent="center"
                alignItems="center"
                item
                xs={12}
              >
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
