import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppLayout from './AppLayout';
import routes from './routes';
import './index.css';

// Create a simple router component that renders routes
const App: React.FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </HelmetProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
