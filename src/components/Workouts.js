import { Box, FormControl, InputLabel, Select } from '@mui/material';
import React from 'react';

export default function Workouts() {
  return (
    <Box>
      <FormControl fullWidth variant='standard'>
        <InputLabel>תוכנית אימונים</InputLabel>
        <Select></Select>
      </FormControl>
    </Box>
  );
}
