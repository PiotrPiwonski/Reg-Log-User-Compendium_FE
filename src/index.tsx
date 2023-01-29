import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { AuthProvider } from './context/auth/AuthContext';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
