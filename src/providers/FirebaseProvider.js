import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import React, { createContext, useEffect, useState } from 'react';
import { config } from '../config';

export const FirebaseContext = createContext({});

export default function FirebaseProvider({ children }) {
  const [value, setValue] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const firebaseApp = initializeApp(config.firebase);
    const firestore = getFirestore(firebaseApp);
    const auth = getAuth(firebaseApp);

    auth.languageCode = 'il';

    if (window.location.hostname === 'localhost') {
      connectFirestoreEmulator(firestore, 'localhost', 8080);
      connectAuthEmulator(auth, 'http://localhost:9099', {
        disableWarnings: true,
      });
    }

    setValue({ firebaseApp, firestore, auth });
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
