import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
      <div className='py-32 flex justify-center gap-x-2 
    gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 
    lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6'>
        <Link to={'/cart-page'} > 
       <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-44 medium-14 sm:medium-16'>
     
        <span>carts</span></button></Link>
        <Link to={'/orderedproduct'} > 
       <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-44 medium-14 sm:medium-16'>
       
        <span>Ordered Product</span></button></Link>
        <Link to={'/acceptedproduct'} > 
       <button className='flexCenter gap-2 rounded-md bg-primary h-12 w-44 medium-14 sm:medium-16'>
       
        <span>Accepted Product</span></button></Link>
       
    </div>
  )
}

export default Sidebar