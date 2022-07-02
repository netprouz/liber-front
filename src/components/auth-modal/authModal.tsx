import React, { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import Image from 'next/image';
import { Input } from 'components/input';
import wavePng from '../../assets/png/waveElement2.png';
import { AuthModalTypes } from './auth.types';
// import CustomOtpInput from './otp-input';
import CoutDown from './coutdown';

const AuthModal: React.FC<AuthModalTypes> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState('');

  const handleChange = (otp: string) => setCode(otp);

  return (
    <Modal
      open={isModalOpen || false}
      // onClose={handleClose}
      sx={{ border: 'none' }}
      onClose={(_, reason) => {
        if (reason === 'backdropClick') {
          setIsModalOpen(false);
        }
      }}
    >
      <Box
        sx={{
          backgroundColor: '#fff',
          width: 742,
          height: 437,
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'absolute', right: 0, top: 0 }}>
          <Image src={wavePng} alt="wave" />
        </Box>
        <Box
          sx={{
            padding: '60px 200px',
            display: 'flex',
            flexDirection: 'column',
            // alignItems: "center",
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: 20,
              fontWeight: 700,
              width: 200,
              textAlign: 'center',
              margin: '0 auto',
            }}
          >
            {step === 1
              ? 'Ассалому алайкум  Хуш келибсиз!'
              : 'Телефонингизга юборилган кодни киритинг'}
          </Typography>
          {step === 1 ? (
            <>
              <Input
                sx={{ marginTop: '44px' }}
                placeholder="+998 __ ___ __ __"
                label="Мобил рақам"
                labelSize={14}
              />
              <Button
                color="primary"
                variant="contained"
                size="large"
                sx={{
                  marginTop: '35px',
                  padding: '14px',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
                onClick={() => setStep(2)}
              >
                Кириш
              </Button>
            </>
          ) : (
            <>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {/* <CustomOtpInput
                  value={code}
                  onChange={handleChange}
                  numInputs={4}
                  isDisabled={false}
                /> */}
                <CoutDown />
                <Button
                  variant="text"
                  sx={{
                    color: '#20AFFF',
                    fontSize: '14px',
                    fontWeight: 500,
                    marginTop: '10px',
                  }}
                >
                  Қайта юбориш
                </Button>
              </Box>
              <Button
                color="primary"
                variant="contained"
                size="large"
                sx={{
                  marginTop: '26px',
                  padding: '14px',
                  fontSize: '16px',
                  fontWeight: 500,
                }}
                onClick={() => setStep(2)}
              >
                Кириш
              </Button>
              <Button
                variant="text"
                sx={{
                  color: '#20AFFF',
                  fontSize: '14px',
                  fontWeight: 500,
                  marginTop: '50px',
                }}
              >
                Телефон рақамни ўзгартириш
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default AuthModal;
