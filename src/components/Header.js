import { Box, Container, Typography, useTheme } from '@mui/material';
import React from 'react';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';

export const HEADER_HEIGHT = 120;

export default function Header() {
  const theme = useTheme();
  const { auth } = useFirebase();
  const { user } = useAuth();

  return (
    <Box
      sx={{
        height: HEADER_HEIGHT,
        backgroundColor: theme.palette.primary.main,
        borderEndStartRadius: 30,
        borderEndEndRadius: 30,
      }}
    >
      <Container
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          color: '#eceff1',
        }}
      >
        <Typography variant='h5'>היי {user?.displayName}</Typography>
      </Container>
    </Box>
  );
}
