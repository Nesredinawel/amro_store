import React from 'react'

import all_products from '../assets/all_products'
import Item from '../components/Item'
import { NavLink } from 'react-router-dom'

const Category = ({category, banner}) => {
  return (
   <section className='bg-primary '>
    
  

    {/* container */}
    <div className='max_padd_container container mx-auto mt-8 xl:py-20'>
    <div className=' space-y-6 columns-2 md:columns-3 lg:columns-4 border-separate rounded-lg'>
      {all_products.map((item) => {
        if(category === item.category){
          return <Item key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} />

        }
      })}
    </div>
    </div>
    <div className='mt-16 text-center'>
      <button className='btn_dark_rounded'>Load more</button>
    </div>
    <div className='fixed bottom-4 right-4'>
  <NavLink to={'/admin/addproduct'} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}>
                 
                  
                 Add Product
               </NavLink>
  </div>
   </section>
  )
}

export default Category