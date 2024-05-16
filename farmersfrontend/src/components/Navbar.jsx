import React from 'react'
import logo from '../assets/logo.svg'
import profileImg from '../assets/profile.png'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='max_padd_container flexBetween bg-white py-2 ring-1 ring-slate-900/5 relative'>
    <div><img className='w-20 h-20' src={logo} alt="" /></div>
    <div className='uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1'>Farmers panel</div>
    <div><img src={profileImg} alt="" className='h-12 w-12 rounded-full' /></div>


    {localStorage.getItem('auth-token') ?
<NavLink onClick={()=>{localStorage.removeItem(auth-token,'formdata'); window.location.replace("/login")}}  className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}> 
               Logout</NavLink> :
                <NavLink to={'login'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
                 
            
                  Login
                </NavLink>}
   </nav>
  )
}

export default Navbar