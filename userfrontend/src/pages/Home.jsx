import React from 'react'

import Popular from '../components/Popular'

import NewCollections from '../components/NewCollections'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
   <div>

   <Popular />

   <NewCollections />


   
  <div className='fixed bottom-4 right-4'>
  <NavLink to={'/admin/addproduct'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
                 
                  
                 Add Product
               </NavLink>
  </div>
   </div>
   
  )
}

export default Home