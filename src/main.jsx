import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// custom css
import './index.css'
// bootstrap css
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// toastify css
import '/node_modules/react-toastify/dist/ReactToastify.css';
// app
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
