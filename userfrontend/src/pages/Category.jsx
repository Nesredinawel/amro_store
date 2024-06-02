import React, { useContext } from 'react'


import Item from '../components/Item'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Category = ({category}) => {

  const {all_products} = useContext(ShopContext)
  return (
   <section className='bg-primary '>
    
  

    {/* container */}
    <div className='max_padd_container container mx-auto mt-8 py-20'>
    <div className=' space-y-6 columns-2 md:columns-3 lg:columns-4 border-separate rounded-lg'>
      {all_products.map((item) => {
        if(category === item.category){
          return <Item key={item.productid} productid={item.productid} productimage={item.productimage}  userimage={item.userimage}  productname={item.productname}  username={item.username}  price={item.price} email={item.email} date={item.date} />

        }
      })}
    </div>
    </div>
    
   </section>
  )
}

export default Category