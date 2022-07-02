import { Container, Stack } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import Logo from 'assets/svg/Logo.svg';
import UserIcon from 'components/icons/user.icon';
import { Button } from 'components/button';
import Link from 'next/link';
import AuthModal from 'components/auth-modal/authModal';
import { SearchField } from './components/search-field';
import { LanguageChanger } from './components/language-changer';
import { HeaderContent, HeaderWrapper } from './header.styles';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <AuthModal {...{ setIsModalOpen, isModalOpen }} />
      <HeaderWrapper>
        <Container maxWidth="lg">
          <HeaderContent justify="space-between">
            <Link href="/" passHref>
              <Image src={Logo} alt="logo" width="165px" height={44} />
            </Link>
            <SearchField isLabel />
            {isAuthenticated ? (
              <Stack gap="20px" direction="row">
                <Button variant="outlined" size="large">
                  hi
                </Button>
              </Stack>
            ) : (
              <Stack gap="20px" direction="row">
                <LanguageChanger />
                <Button
                  variant="contained"
                  startIcon={<UserIcon />}
                  onClick={handleOpen}
                >
                  Кириш
                </Button>
              </Stack>
            )}
          </HeaderContent>
        </Container>
      </HeaderWrapper>
    </>
  );
};

export default Header;
