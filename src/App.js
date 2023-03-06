import './App.css';
import AuthProvider from './providers/AuthProvider';
import Router from './components/Router';
import FirebaseProvider from './providers/FirebaseProvider';

function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default App;
