import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './css/index.css'

// Fuentes y librerías necesarias
import '@fontsource-variable/open-sans'
import '@fontsource-variable/roboto'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <>
      <App />
      <ToastContainer />
    </>
  </BrowserRouter>
)