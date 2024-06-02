import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import { MdClose, MdMenu } from 'react-icons/md'
import { FaCartShopping } from "react-icons/fa6";
import logo from '../assets/logo.svg'
import logout from '../assets/logout.svg'
import user from '../assets/user.svg'
import { ShopContext } from '../Context/ShopContext';
import { useEffect } from 'react';
import LogoutModal from './LogoutModal';
const Header = () => {

  const [showModal, setShowModal] = useState(false);

  const handleLogoutClick = () => {
    setShowModal(true);
  };

 

  const handleConfirmLogout = () => {
    setShowModal(false);
    //  Retrieve formData from localStorage 
         localStorage.removeItem('formData')
         localStorage.removeItem('auth-token')
       
        window.location.replace("/login")
  
    console.log("Logged out");
  };

















  const [formData, setFormData] = useState(() => {


    // Retrieve formData from localStorage 
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
  });



useEffect(() => {
  
  fetchInfo();

}, []); 




 
  const [profiledetail, setprofileDetails] = useState([]);
  const fetchInfo = async () => {
    
  
    await fetch('http://localhost:4000/profiledetail',{
      method:'POST',
      headers:{
          Accept:'application/json',
         'Content-Type' :'application/json'
      },
      body:JSON.stringify({email:formData}),
      
    }).then((res) => res.json()).then((data) => {setprofileDetails(data)});
      
  }




















    const [menuOpened, setmenuOpened] = useState(false);
    const toggleMenu =() => setmenuOpened(!menuOpened);
    const {getTotalCartItems} = useContext(ShopContext)
  return (
<header className='fixed top-0 left-0 m-auto max_padd_container
 w-full bg-white ring-1 bg-white
  ring-slate-900/5 z-10'>
  <div className='px-4 flexBetween py-3  max-xs:px-2'>
  <div>
        <Link > <img src={logo} alt='' height={96} width={96} /></Link></div>
        {/**navbar */}
        <Navbar containerStyles={"hidden md:flex gap-x-5 x1:gap-x-10 medium-15"}/>
        {/**navbarmobile */}
        <Navbar  containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3x1 shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300" : 
        "flex item-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3x1 shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"}`}/>
        {/**button */}
        <div className='flexBetween sm:gap-x-6 bold-16 '>
            {!menuOpened? (
                <MdMenu className=' md:hidden cursor-pointer
                 hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30 h-8 
                w-8 rounded-full' onClick={toggleMenu}/>
            ):
            (
                <MdClose  className=' md-hidden cursor-pointer
                 hover:text-secondary mr-2 p-1 ring-1 ring-slate-900/30
                  h-8 w-8 rounded-full' onClick={toggleMenu}/>
            )}
            <div className='flexBetween sm:gap-x-6'>
                <NavLink to={"/cart-page"} className={"flex"}><FaCartShopping className='p-1 h-8 w-8   ' />
                <span className='relative flexCenter w-5 h-5 rounded-full bg-secondary text-white medium-14 -top-2'>{getTotalCartItems()}</span></NavLink>


               {localStorage.getItem('auth-token') ?

<div>
                 
<div onClick={handleLogoutClick} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}> 
                <img src={logout} alt='logoutIcon' height={19} width={19}/>Logout
                <LogoutModal 
        show={showModal} 
     
        handleConfirm={handleConfirmLogout} 
      />
                </div> 
</div> :
                <NavLink to={'login'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
                  <img src={user} alt='"userIcon' height={19}
                  width={19} />
                  Login
                </NavLink>}




                <NavLink to={'profile'} className={" flexCenter gap-x-2 medium-16"}>
                {profiledetail.map((profile, i)=> ( 
                <img key={i} className='rounded-full h-10 w-10' src={profile.image} alt="" />))}
                </NavLink>
                

            </div>
        </div>
  </div>
   
</header>  )
}

export default Header