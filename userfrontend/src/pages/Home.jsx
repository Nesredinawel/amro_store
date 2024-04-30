import React from 'react'
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Offer from '../components/Offer'
import NewCollections from '../components/NewCollections'
import { NavLink } from 'react-router-dom'
import NewsLetter from '../components/NewsLetter'
const Home = () => {
  return (
   <div>
   {/* <Hero /> */}
   <Popular />
   {/* <Offer /> */}
   <NewCollections />
   {/* <NewsLetter /> */}

   
  <div className='fixed bottom-4 right-4'>
  <NavLink to={'/admin/addproduct'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
                 
                  
                 Add Product
               </NavLink>
  </div>
   </div>
   
  )
}

export default Home