import React from 'react'
import profileImg from '../assets/profile.png'

const Profile = () => {
  return (
    <div className='p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7'>
  <div className='mb-3   md:flex lg:flex xl:flex xl:space-x-36 md:space-x-28 xs:space-y-4 xl:pl-20 '>
     <div className='max-sm:pl-20 space-y-4'>  
      <div className='pl-8'><img src={profileImg} alt="" className=' mt-8 h-40 w-40 rounded-full  border-4 border-slate-400' /></div>
    <div className='bg-green-300 rounded-3xl w-60'> <h4 className=' pb-1 pl-6 text-xl '>Name: neil</h4></div></div>
        <div className='bg-gray-400 bg-opacity-15 rounded-xl h-60 w-96 md:w-[60%] xl:w-[65%] lg:w-[60%]  shadow-xl '>

          <p>Personal description </p>
        </div>

        </div>

        <div className='mb-3   md:flex lg:flex xl:flex xl:space-x-36 md:space-x-28 xs:space-y-4 xl:pl-20 '>
     <div className='max-sm:pl-8 space-y-4'>   <div className='border w-80 h-80 bg-green-900 bg-opacity-25 rounded-3xl shadow-xl'>
      <p>location & mostly produced product and status</p>
      </div> 
</div>
        <div className='bg-red-400 bg-opacity-30 rounded-xl h-60 w-96 md:w-[60%] xl:w-[65%] lg:w-[60%]  shadow-xl '>
          <p>glance of product</p>
        </div>

        </div>

    </div>
  )
}

export default Profile