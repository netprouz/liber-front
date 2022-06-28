import { Container, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Button } from 'components/button';
import { StyledTab, StyledTabs, TabPanel } from 'components/tabs';
import { COLORS } from 'config/styles-config';
import React from 'react';
import { BasicDetails } from './components/basic-details';
import Comments from './components/comments';
import CompleteDetails from './components/complete-details';
import { SmallProductCard } from './components/small-product-card';

const ProductDetailsPage = () => {
  const [value, setValue] = React.useState(0);
  const theme = useTheme()
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ padding: '1.5rem 0' }} maxWidth="lg">
      <Grid container columnSpacing={isNotMobile ? 2 : 0}>
        <BasicDetails isNotMobile={isNotMobile} />
        <Grid item xs={9} padding={isNotMobile ? "auto" : "0 1rem"} width="100%">
          <Stack>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="styled tabs example"
            >
              <StyledTab label="Маълумотлар" isNotMobile={isNotMobile} />
              <StyledTab label="Фикрлар" isNotMobile={isNotMobile} />
            </StyledTabs>
            <TabPanel value={value} index={0}>
              <CompleteDetails />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Comments />
            </TabPanel>
          </Stack>
        </Grid>
        <Grid item xs={3} padding={isNotMobile ? "auto" : "0 1rem"}>
          <Stack marginTop="2rem" gap="1rem">
            <Typography variant="h4" fontSize="2rem" fontWeight={700}>
              Ўхшаш китоблар
            </Typography>
            <SmallProductCard isNotMobile={isNotMobile} />
            <SmallProductCard isNotMobile={isNotMobile} />
            <SmallProductCard isNotMobile={isNotMobile} />
            <Button
              sx={{ backgroundColor: COLORS.lightBg }}
              size="large"
              fullWidth
              variant="text"
            > 
              Кўпроқ
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetailsPage;
