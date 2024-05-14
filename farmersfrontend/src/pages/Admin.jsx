import React from 'react'
import Sidebar from '../components/Sidebar'
import { Routes,Route } from 'react-router-dom'
import AddProduct from '../components/AddProduct'
import ListProduct from '../components/ListProduct'
import Profile from '../components/Profile'
const Admin = () => {
  return (
    <div className='lg:flex bg-primary'>
      <Sidebar />
       <Routes>
       <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/listproduct' element={<ListProduct/>}></Route>

       </Routes>
    </div>
  )
}

export default Admin