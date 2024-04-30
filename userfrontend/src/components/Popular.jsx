import React from 'react'
import POPULAR from '../assets/popular'
import Item from './Item'
const Popular = () => {
  return (
   <section className='bg-primary '>
    <div className='max_padd_container py-12 xl:py-28 xl:w-[88%]'>
        <h3 className='h3 text-center'>Popular products</h3>
        <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16' />
        {/* container */}
        <div className='space-y-3 columns-2 md:columns-3 lg:columns-4'>
            {POPULAR.map((item) => (
                <Item  key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} old_price={item.old_price}/>
            ))}
        </div>
    </div>
    
   </section>
  )
}

export default Popular