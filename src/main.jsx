import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
    <UserContext>
      <Home />
    </UserContext>  
)
