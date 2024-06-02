import React from 'react'
import LATEST from '../assets/latest'
import Item from './Item'
import { ShopContext } from '../Context/ShopContext'
import { useContext } from 'react'
const NewCollections = () => {
  const {recent_product} = useContext(ShopContext)
  return (
    <section className='bg-primary '>
    <div className='max_padd_container py-12  xl:w-[99%]'>
        <h3 className='h3 text-center'>new Products</h3>
        <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16' />
        {/* container */}
        <div className='space-y-3 gap-9 columns-2 md:columns-3 lg:columns-3'>
        {recent_product.map((item) => {
    
          return <Item key={item.productid} productid={item.productid} productimage={item.productimage}  userimage={item.userimage}  productname={item.productname}  username={item.username}  price={item.price} email={item.email} date={item.date} />

        
      })}
        </div>
    </div>
   </section>
  )
}

export default NewCollections