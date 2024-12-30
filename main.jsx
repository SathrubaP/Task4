import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sathru from './Sathru.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    {/* <Sathru/> */}
  </StrictMode>,
)
