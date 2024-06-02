import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import  ShopContextProvider from "./Context/ShopContext.jsx"
import Login from './pages/Login.jsx'
import Logout from './pages/Logout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
   
    <BrowserRouter>
   <Routes>
   <Route path='/*' element={<App/>}></Route>
   <Route path='/login' element={<Login/>}></Route>
   <Route path="/" element={<Navigate to="/login" />} />
   <Route path='/logout' element={<Logout/>}></Route>
   
  
   </Routes>
 
 
   </BrowserRouter>
    </ShopContextProvider>
  
  </React.StrictMode>,
)
