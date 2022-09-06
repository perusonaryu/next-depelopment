import 'src/lib/mantine/mantineBase.css';
import 'src/lib/tailwind.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
        emotionOptions={{ key: 'mantine', prepend: false }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
