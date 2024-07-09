import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const mockUrl = import.meta.env.VITE_MOCK_URL

console.log(mockUrl)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
