import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WelcomePage from './pages/Welcome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WelcomePage />
  </React.StrictMode>
);

