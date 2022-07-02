import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../config/mui-config';

import 'lib/i18next';
import { GlobalStyle } from '../config/styles-config';
import 'config/font.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Liber</title>
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default appWithTranslation(MyApp);
