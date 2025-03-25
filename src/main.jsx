import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Syne:wght@400..800&display=swap');
    </style>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </StrictMode>
);
