import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import type { GetStaticProps } from 'next';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import theme from '../config/mui-config';
import 'lib/i18next';
import { GlobalStyle } from '../config/styles-config';
import 'config/font.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Hydrate>
  </QueryClientProvider>
);
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['common'])),
    // Will be passed to the page component as props
  },
});

export default appWithTranslation(MyApp);
