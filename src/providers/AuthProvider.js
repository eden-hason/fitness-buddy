import React, { createContext, useEffect, useState } from 'react';
import {
  signOut,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [isUserMissingFields, setIsUserMissingFields] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useFirebase();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('blat');
      setUser(user);
      setIsLoaded(true);
    });
  }, []);

  useEffect(() => {
    if (!user) return;

    setConfirmationResult(null);

    if (!user.displayName) {
      setIsUserMissingFields(true);
      return;
    }

    const origin = location.pathname || location.state?.from?.pathname || '/';
    navigate(origin);
  }, [user]);

  const handlePhoneNumberSubmit = async (phoneNumber) => {
    console.log('phoneNumber:', phoneNumber, window.recaptchaVerifier);
    const confirmationResult = await signInWithPhoneNumber(
      auth,
      phoneNumber,
      window.recaptchaVerifier
    );

    setConfirmationResult(confirmationResult);
  };

  const handleCodeSubmit = async (code) => {
    const res = await confirmationResult.confirm(code);
    setUser(res.user);
  };

  const handleSignout = async () => {
    signOut(auth);
  };

  const handleUserDisplayNameSubmit = async (userDisplayName) => {
    await updateProfile(auth.currentUser, { displayName: userDisplayName });
    const origin = location.state?.from?.pathname || '/';
    navigate(origin);
  };

  const value = {
    user,
    confirmationResult,
    isUserMissingFields,
    handlePhoneNumberSubmit,
    handleCodeSubmit,
    handleUserDisplayNameSubmit,
    handleSignout,
  };

  // console.log('isLoaded:', isLoaded);
  if (!isLoaded) return null;

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
