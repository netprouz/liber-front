import { Box, Typography } from '@mui/material';
import styled from 'styled-components';
import Image from 'next/image';
import React from 'react';
import AvatarPng from '../../../assets/png/avatar.png';

const FlexBox = styled.div<{ isNotMobile?: boolean }>`
  display: flex;
  padding: 24px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.06);
  border-radius: 4px;
  align-items: ${(props) => (props.isNotMobile ? 'center' : 'flex-start')};
  background: #fff;
  margin: ${(props) => (props.isNotMobile ? 0 : '0 1rem')};
`;
const ImageBox = styled.div<{ isNotMobile?: boolean }>`
  border-radius: 50%;
  max-width: ${(props) => (props.isNotMobile ? '160px' : '100px')};
  height: ${(props) => (props.isNotMobile ? '160px' : '100px')};
  overflow: hidden;
`;

const UserCard: React.FC<{ isNotMobile?: boolean }> = ({ isNotMobile }) => (
  <FlexBox isNotMobile={isNotMobile}>
    <Box sx={{ width: isNotMobile ? 220 : 120 }}>
      <ImageBox isNotMobile={isNotMobile}>
        <Image
          alt="Avatar"
          src={AvatarPng}
          width={isNotMobile ? 160 : 100}
          height={isNotMobile ? 160 : 100}
          objectFit="cover"
        />
      </ImageBox>
    </Box>
    <Box>
      <Typography
        variant="h5"
        fontWeight={700}
        fontSize={isNotMobile ? 30 : 20}
        color="#242424"
      >
        Суғдиёна Икромова
      </Typography>
      <Typography
        variant="subtitle1"
        fontWeight={500}
        fontSize={isNotMobile ? 20 : 16}
        color="#242424"
        marginTop="10px"
      >
        +998 90 253 77 53
      </Typography>
      <Typography
        variant="subtitle2"
        fontWeight={500}
        fontSize={isNotMobile ? 20 : 16}
        color="#9A9A9A"
        marginTop="10px"
      >
        ID: 0001 Баланс: 45 000 сўм
      </Typography>
    </Box>
  </FlexBox>
);

export default UserCard;
