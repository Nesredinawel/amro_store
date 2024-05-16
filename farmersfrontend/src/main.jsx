import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
   <Route path='/login' element={<Login/>}></Route>
   <Route path='/*' element={<App />}></Route>
  
   </Routes>
 
 
   </BrowserRouter>
  </React.StrictMode>,
)
