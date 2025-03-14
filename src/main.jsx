import { StrictMode } from 'react'
import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/reset.css'
import './assets/css/style.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
