import React, { useEffect, useState } from 'react'
import profileImg from '../assets/profile.png'
import { MdEditSquare } from "react-icons/md";
import { Link } from 'react-router-dom';

const Profile = () => {
  const [formData, setFormData] = useState(() => {


    // Retrieve formData from localStorage 
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
  });



useEffect(() => {
  
  fetchInfo();
  fetchPro();
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






const [allproduct, setallproduct] = useState([]);
const fetchPro = async () => {


    await fetch('http://localhost:4000/userproduct',{
      method:'POST',
      headers:{
          Accept:'application/json',
         'Content-Type' :'application/json'
      },
      body:JSON.stringify({email:formData}),
      
    }).then((res) => res.json()).then((data) => {setallproduct(data)});
      
  }




  



  return (
    <div className='p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7'>
       {profiledetail.map((profile, i)=> ( 
    <div key={i} >
  <div className='mb-3   md:flex lg:flexCenter xl:flexCenter xl:space-x-36 md:space-x-28 xs:space-y-4 xl:pl-20 '> 
     <div  className=' max-sm:pl-20 space-y-4'>   
      <div className='pl-8'><img src={profile.image} alt="" className=' mt-8 h-40 w-40 rounded-full  border-4 border-slate-400' /></div>
</div> 


<div className=' pt-16 border w-96 h-80 bg-green-900 bg-opacity-15 rounded-3xl shadow-xl'>
     <div className='flex'>
     <div className='pl-4 medium-22 text-blue-500 pr-2'> Name:</div>
      <div className='pt-1 bg-orange-200 w-32 rounded-xl '><div className='pl-3'>{profile.name}</div></div>
     </div>
     <div className='flex pt-3'>
     <div className='pl-4 medium-22 text-blue-500 pr-2'> Email:</div>
      <div className='pt-1 bg-orange-200 w-60 rounded-xl '><div className='pl-3'>{profile.email}</div></div>
     </div>

    <div className='flex pt-3'>
    <div className='pl-4 medium-22 text-blue-500 pr-2'> Location:</div>
      <div className='pt-1 bg-orange-200 w-48 rounded-xl '><div className='pl-7'>{profile.location}</div></div>
    </div>
      </div> 
        

        </div>

        <div className='mb-3   md:flex lg:flex xl:flex md:space-x-12 xs:space-y-4'>
     <div className='max-sm:pl-8 space-y-4'>  
     <div className='bg-gray-400 bg-opacity-15 rounded-xl  shadow-xl '>

<div className='pl-3 medium-22 text-blue-700'>Personal description </div>
<div className='p-4 '>   {profile.description} </div>
</div>
      
      
</div>
       

        </div>



        
<div className="fixed bottom-4 right-4">    <Link to={'/addprofile'} > 
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
      <div className='flex'><div className='mt-1'><MdEditSquare/></div>Edit Profile</div>
      
  </button></Link>
</div>
    </div>
  ))}
    </div>
  )
}

export default Profile