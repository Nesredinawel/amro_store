import React from 'react'
import Cart from './Cart'
import Orderedproduct from '../components/Orderedproduct'
import Sidebar from '../components/Sidebar'
import { Routes,Route } from 'react-router-dom'
import CartItems from '../components/CartItems'
import AcceptedProduct from '../components/AcceptedProduct'

const OrderProduct = () => {
  return (
    <div className='lg:flex bg-primary pt-24'>
    <Sidebar />
     <Routes>
     <Route path="/orderedproduct" element={<Orderedproduct />} />
      <Route path="/cart-page" element={<CartItems />} />
      <Route path="/acceptedproduct" element={<AcceptedProduct />} />

     </Routes>
     </div>
  )
}

export default OrderProduct
