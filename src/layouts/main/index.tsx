import { useMediaQuery } from '@mui/material';
import { BottomMenu } from 'layouts/bottomNavigation';
import { Footer } from 'layouts/footer';
import { Header, HeaderMobile } from 'layouts/header';
import React from 'react';
import { useTheme } from 'styled-components';

const Main: React.FC = ({ children }) => {
  const theme = useTheme()
  //eslint-disable-next-line
  const isNotMobile = useMediaQuery(theme.breakpoints.up('md'));
  return (<>
    {isNotMobile ? <Header /> : <HeaderMobile />}
    <main>{children}</main>
    <Footer />
    {!isNotMobile && <BottomMenu />}
  </>
  );

}

export default Main;
