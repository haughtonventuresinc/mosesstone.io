import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import SocialLinks from './SocialLinks';
import './index.css';

const root = document.getElementById('root')!;

createRoot(root).render(
  <StrictMode>
    {window.location.pathname === '/social' ? <SocialLinks /> : <App />}
  </StrictMode>
);
