import React from 'react';
import { Theme, useMediaQuery } from '@mui/material';
import { useTheme } from 'styled-components';
import { BottomMenu } from 'layouts/bottomNavigation';
import { Footer } from 'layouts/footer';
import { Header, HeaderMobile } from 'layouts/header';

const Main: React.FC = ({ children }) => {
  const theme: any = useTheme();
  const isnotmobile = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <>
      {isnotmobile ? <Header /> : <HeaderMobile />}
      <main>{children}</main>
      <Footer />
      {!isnotmobile && <BottomMenu />}
    </>
  );
};
export default Main;
