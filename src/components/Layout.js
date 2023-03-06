import React, { useEffect, useState } from 'react';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/system';
import { blueGrey } from '@mui/material/colors';
import { heIL } from '@mui/material/locale';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import Navigator from './Navigator';
import Header, { HEADER_HEIGHT } from './Header';
import useFirebase from '../hooks/useFirebase';
import useAuth from '../hooks/useAuth';

const theme = createTheme(
  {
    palette: {
      primary: {
        main: blueGrey[500],
      },
    },
    direction: 'rtl',
  },
  heIL
);

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

export default function Layout() {
  const { auth } = useFirebase();
  const { user } = useAuth();

  console.log('auth:', auth);
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ height: '100%' }}>
            {user?.displayName && <Header />}
            <Container
              sx={{
                height: `calc(100% - ${HEADER_HEIGHT}px)`,
                paddingTop: '1em',
              }}
            >
              <Outlet />
            </Container>
          </Box>
          {user?.displayName && <Navigator />}
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
