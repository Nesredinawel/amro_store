import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Logout from './pages/Logout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Navigate to="/login" />} />
   <Route path='/login' element={<Login/>}></Route>
   
   <Route path='/logout' element={<Logout/>}></Route>
   <Route path='/*' element={<App />}></Route>
  
  
   </Routes>
 
 
   </BrowserRouter>
  </React.StrictMode>,
)
