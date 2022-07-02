import Image from 'next/image';
import React from 'react';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@mui/material';
import WavePng from 'assets/png/waveElement3.png';
import GirlPng from 'assets/png//hero2.png';
import {
  CardBox,
  CustomBox,
  Flex,
  ImageBox,
  Label,
  CardTitle,
} from './styles/sub.style';
import { Title } from './styles/tabs-title.style';

const Subscription: React.FC<{ isNotMobile?: boolean }> = ({ isNotMobile }) => (
  <>
    <CardBox bgColor="#ff7f4d" minHeight={176}>
      <CardTitle>
        Узингиз севган булимга
        <br />
        обуна бўлинг
      </CardTitle>
      <ImageBox topBottom="top">
        {isNotMobile && <Image src={WavePng} alt="wave" />}
        {isNotMobile && <Image src={GirlPng} alt="girl" />}
      </ImageBox>
    </CardBox>

    <Paper sx={{ padding: '32px 32px 122px 32px', marginTop: '24px' }}>
      <Title>Обуна</Title>
      <Flex direction={isNotMobile ? 'row' : 'column'}>
        <Box sx={{ width: isNotMobile ? '50%' : '100%' }}>
          <FormControl sx={{ minWidth: isNotMobile ? '80%' : '100%' }}>
            <Label>Обуна давом этиш вакти</Label>
            <Select
              sx={{
                borderRadius: '16px',
                '.MuiOutlinedInput-input': {
                  padding: '1rem',
                },
              }}
              // value={age}
              // onChange={handleChange}
              displayEmpty
            >
              <MenuItem value={10}>10 кун</MenuItem>
              <MenuItem value={20}>20 кун</MenuItem>
              <MenuItem value={30}>30 кун</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{ minWidth: isNotMobile ? '80%' : '100%', marginTop: '24px' }}
          >
            <Label>Булимни танланг</Label>
            <Select
              sx={{
                borderRadius: '16px',
                '.MuiOutlinedInput-input': {
                  padding: '1rem',
                },
              }}
              // value={age}
              // onChange={handleChange}
              displayEmpty
              // inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={10}>10 кун</MenuItem>
              <MenuItem value={20}>20 кун</MenuItem>
              <MenuItem value={30}>30 кун</MenuItem>
            </Select>
          </FormControl>
          <Typography
            variant="h5"
            sx={{ marginTop: '24px', marginBottom: '20px', fontWeight: 700 }}
          >
            Обуна 30 кун давом этади
          </Typography>
        </Box>
        <Box>
          <CustomBox isNotMobile={isNotMobile}>
            <Flex>
              <Typography variant="subtitle1">Бошланиш вакти</Typography>
              <Typography variant="smallBold">12/09/2021</Typography>
            </Flex>
            <Flex>
              <Typography variant="subtitle1">Якунланиш вакти</Typography>
              <Typography variant="smallBold">12/09/2021</Typography>
            </Flex>
            <Flex>
              <Typography variant="subtitle1">Обуна нархи</Typography>
              <Typography variant="smallBold" sx={{ color: '#3F51B5' }}>
                12 000 сум
              </Typography>
            </Flex>
          </CustomBox>
          <Button
            variant="contained"
            size="large"
            sx={{ width: '100%', marginTop: '24px', minHeight: '44px' }}
          >
            Обуна булиш
          </Button>
        </Box>
      </Flex>
    </Paper>
  </>
);

export default Subscription;
