import { Box, Paper, Typography, Button } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import { Input } from 'components/input';
import { CardBox, ImageBox } from './styles/sub.style';
import WalletPng from '../../../assets/png/wallett.png';
import PaymePng from '../../../assets/png/payme2.png';
import ClickPng from '../../../assets/png/click.png';
import { Title } from './styles/tabs-title.style';

const Wallet: React.FC<{ isNotMobile?: boolean }> = ({ isNotMobile }) => {
  const [selectedPayment, setSelectedPayment] = useState('');

  return (
    <Paper sx={{ padding: '32px' }}>
      <Title>Э-Хисоб</Title>
      <CardBox bgColor="#3F51B5" minHeight={98}>
        <ImageBox topBottom="bottom">
          <Image src={WalletPng} alt="girl" />
        </ImageBox>
        <Box sx={{ padding: '26px' }}>
          <Typography
            variant="subtitle1"
            sx={{ color: '#ffffffb8', marginBottom: '12px' }}
          >
            Баланс
          </Typography>
          <Typography
            variant="smallBold"
            sx={{ color: '#FFFFFF', fontSize: '24px', fontWeight: 700 }}
          >
            45 000 сўм
          </Typography>
        </Box>
      </CardBox>
      {selectedPayment ? (
        <Box sx={{ marginTop: '35px', width: isNotMobile ? '350px' : '100%' }}>
          <Input label="Сумма" placeholder="Сум" sx={{ width: '100%' }} />
          <br />
          <Button
            variant="contained"
            sx={{ minHeight: '44px', marginTop: '35px' }}
            fullWidth
          >
            Тулдириш
          </Button>
        </Box>
      ) : (
        <>
          <Button
            variant="outlined"
            fullWidth
            sx={{ minHeight: '61px', marginTop: '36px' }}
            onClick={() => setSelectedPayment('payme')}
          >
            <Image src={PaymePng} alt="payme" />
          </Button>
          <Button
            variant="outlined"
            fullWidth
            sx={{ minHeight: '61px', marginTop: '36px' }}
            onClick={() => setSelectedPayment('click')}
          >
            <Image src={ClickPng} alt="Click" />
          </Button>
        </>
      )}
    </Paper>
  );
};

export default Wallet;
