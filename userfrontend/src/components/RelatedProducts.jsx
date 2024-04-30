import React from 'react'
import Item from './Item'
import all_products from '../assets/all_products'
const RelatedProducts = () => {
  return (
    <section className='bg-primary '>
    <div className='max_padd_container py-12  xl:w-[88%]'>
        <h3 className='h3 text-center'>Related products</h3>
        <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16' />
        {/* container */}
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
            {all_products.slice(0, 4).map((item) => (
                <Item  key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} />
            ))}
        </div>
    </div>
   </section>
  )
}

export default RelatedProducts