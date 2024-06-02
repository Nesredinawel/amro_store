import React, { useState } from 'react'

const Logout = () => {
    const logout = async () => {


        // Retrieve formData from localStorage 
         localStorage.removeItem('formData')
         localStorage.removeItem('auth-token')
       
        window.location.replace("/login")
        
     

      }
  return (
    <div className='max_padd_container pt-56'>
        
     

         </div>

  )
}

export default Logout
