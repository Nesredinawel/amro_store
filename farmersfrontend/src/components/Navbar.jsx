import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
import logout from '../assets/logout.svg'
import { NavLink } from 'react-router-dom'
import LogoutModal from './LogoutModal'

const Navbar = () => {
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

  useEffect(() => {
  
    fetchInfo();
  
  }, []); 
  return (
   <nav className='max_padd_container flexBetween bg-white py-2 ring-1 ring-slate-900/5 relative'>
    <div><img className='w-20 h-20' src={logo} alt="" /></div>
    <div className='uppercase bold-22 text-white bg-secondary px-3 rounded-md tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1 pl-96'><div className='flexCenter pr-60'>
    Farmers panel</div></div>


    {localStorage.getItem('auth-token') ?
    <div>
                 
                 <div onClick={handleLogoutClick} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}> 
                                 <img src={logout} alt='logoutIcon' height={19} width={19}/>Logout
                                 <LogoutModal 
                         show={showModal} 
                      
                         handleConfirm={handleConfirmLogout} 
                       />
                                 </div> 
                 </div>  :




                <NavLink to={'login'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
                 
            
                  Login
                </NavLink>}

                
                <NavLink to={'profile'} className={" flexCenter gap-x-2 medium-16"}>
                {profiledetail.map((profile, i)=> ( 
                <img key={i} className='rounded-full h-10 w-10' src={profile.image} alt="" />))}
                </NavLink>
   </nav>
  )
}

export default Navbar