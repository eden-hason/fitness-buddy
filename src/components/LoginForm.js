import React, { useEffect, useState } from 'react';
import { Button, Fade, Slide, TextField } from '@mui/material';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';
import { Box } from '@mui/system';
import { RecaptchaVerifier } from 'firebase/auth';

export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [userDisplayName, setUserDisplayName] = useState('');
  const [errors, setErrors] = useState({});
  const {
    confirmationResult,
    isUserMissingFields,
    handlePhoneNumberSubmit,
    handleCodeSubmit,
    handleUserDisplayNameSubmit,
  } = useAuth();

  const { auth } = useFirebase();

  useEffect(() => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible',
        },
        auth
      );
    } catch (e) {
      console.log('e', e);
    }
  }, []);

  useEffect(() => {
    setErrors({ phoneNumber: null });
  }, [phoneNumber]);

  const _handlePhoneNumberSubmit = () => {
    const regex = new RegExp(/^\d{10}$/);
    const isValid = regex.test(phoneNumber);

    if (!isValid) {
      setErrors({ phoneNumber: 'מספר טלפון לא תקין' });
      return;
    }

    const formattedPhoneNumber = `+972${phoneNumber.slice(1)}`;

    handlePhoneNumberSubmit(formattedPhoneNumber);
  };

  return (
    <Fade in>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        {confirmationResult && (
          <>
            <TextField
              label='קוד'
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <Button onClick={() => handleCodeSubmit(code)}>שלח</Button>
          </>
        )}

        {isUserMissingFields && (
          <>
            <TextField
              label='שם מלא'
              value={userDisplayName}
              onChange={(e) => setUserDisplayName(e.target.value)}
            />
            <Button
              onClick={() => handleUserDisplayNameSubmit(userDisplayName)}
            >
              שלח
            </Button>
          </>
        )}

        {!confirmationResult && !isUserMissingFields && (
          <>
            <TextField
              type={'tel'}
              label='מספר טלפון'
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <Button onClick={_handlePhoneNumberSubmit}>שלח</Button>
            <div id='recaptcha-container'></div>
          </>
        )}
      </Box>
    </Fade>
  );
}
