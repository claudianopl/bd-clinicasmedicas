import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
// import GlobalStyles from '../styles/global';
import { theme as themeChackara } from '../styles/global';
import theme from '../styles/theme';

const myTheme = extendTheme(themeChackara);

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider theme={myTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
