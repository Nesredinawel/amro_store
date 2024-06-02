import React, { useState } from 'react'

const Logout = () => {
    const logout = async () => {


        // Retrieve formData from localStorage 
         localStorage.removeItem('formData')
         localStorage.removeItem('auth-token')
       
        window.location.replace("/login")
        
     

      }
  return (
    <div>
        
         <button onClick={logout} className='btn_dark_rounded my-5 w-full !rounded-md '>Continue</button>

         </div>

  )
}

export default Logout
