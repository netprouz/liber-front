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
import { get } from 'lodash';
import { COLORS } from 'config/styles-config';
import { useFilterContext } from 'context/filter';
import React from 'react';
import Image from 'next/image';
import { useQuery } from 'react-query';
import Empty from 'assets/png/empty.png';
import { getAllData } from 'services/api/get';
import { SubscribeButton } from 'routes/home/components/subscribe/subscribe.styles';
import { FilterLayout } from './layout';

const FilterPage = () => {
  const { grid_view } = useFilterContext();
  const products = [...Array(10).keys()];

  const theme = useTheme();
  const isnotmobile = useMediaQuery(theme.breakpoints.up('md'));

  const { data, isLoading, isFetching, isSuccess } = useQuery('books', () =>
    getAllData('/book/list/')
  );

  return (
    <Box sx={{ backgroundColor: COLORS.gray }}>
      <Container sx={{ padding: isnotmobile ? '1.5rem 0' : '0' }} maxWidth="lg">
        <FilterLayout isnotmobile={isnotmobile}>
          <Grid
            columnSpacing={2}
            rowSpacing={2}
            container
            paddingLeft={!isnotmobile ? '16px' : 'auto'}
          >
            <Grid
              item
              xs={12}
              paddingLeft={!isnotmobile ? '0!important' : 'auto'}
              width={!isnotmobile ? '94%' : 'auto'}
              margin={!isnotmobile ? '0 auto' : 'auto'}
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
                isnotmobile={isnotmobile}
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
              isSuccess &&
              get(data, 'data.results').map((product: any) => (
                <Grid
                  key={product.guid.toString()}
                  item
                  xs={grid_view ? 3 : 12}
                >
                  <ProductCard horizontal={!grid_view} product={product} />
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
