import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from 'assets/svg/Logo.svg';
import { HeaderContent, HeaderWrapper } from './header.styles';
import { SearchField } from './components/search-field';
import { Container } from '@mui/material';

const HeaderMobile = () => {
  return (
    <>
      <HeaderWrapper>
        <Container maxWidth="lg">
          <HeaderContent justify="space-between">
            <Link href="/" passHref>
              <Image src={Logo} alt="logo" width="165px" height={44} />
            </Link>
            <SearchField isLabel={false} />
          </HeaderContent>
        </Container>
      </HeaderWrapper>
    </>
  );
};

export default HeaderMobile;
