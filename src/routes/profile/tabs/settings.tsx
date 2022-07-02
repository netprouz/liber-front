import React, { useState } from 'react';
import styled from 'styled-components';
import { IconButton, Paper } from '@mui/material';
import Image from 'next/image';
import { Input } from 'components/input';
import { Button } from 'components/button';
import AvatarPng from 'assets/png/user-photo.png';
import { Title } from './styles/tabs-title.style';
import { Flex } from './styles/sub.style';

const UploadText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.15px;
  margin-left: 20px;
  color: #3f51b5;
`;

const Settings = () => {
  const [file, setFile] = useState('');
  const handleChange = function loadFile(event: any) {
    if (event.target.files.length > 0) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <Paper sx={{ padding: '32px' }}>
      <Title>Созламалар</Title>
      <input
        type="file"
        onChange={handleChange}
        id="upload"
        accept="image/*"
        style={{ display: 'none' }}
      />
      <label htmlFor="upload">
        <Flex justify="flex-start" direction="row">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            sx={{ borderRadius: '50%', overflow: 'hidden', padding: 0 }}
          >
            <Image
              src={file.length > 0 ? file : AvatarPng}
              alt="avatar user"
              width="70px"
              height="70px"
              objectFit="cover"
            />
          </IconButton>

          <UploadText>Сурат юклаш</UploadText>
        </Flex>
      </label>
      {/* <label htmlFor="avatar" /> */}
      <Input
        fullWidth
        sx={{ margin: '45px 0 65px 0 ' }}
        label="Исмингиз"
        placeholder="Исмингиз"
      />
      <Button variant="contained" size="large" fullWidth>
        Сақлаш
      </Button>
    </Paper>
  );
};

export default Settings;
