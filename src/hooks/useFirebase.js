import { useContext } from 'react';
import { FirebaseContext } from '../providers/FirebaseProvider';

export default function useFirebase() {
  return useContext(FirebaseContext);
}
