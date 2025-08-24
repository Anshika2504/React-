import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// react creates a virtual DOM and compare with real DOM and then changes element as per requirement
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
