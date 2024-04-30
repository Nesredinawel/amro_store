import React from 'react'
import LATEST from '../assets/latest'
import Item from './Item'
const NewCollections = () => {
  return (
    <section className='bg-primary '>
    <div className='max_padd_container py-12  xl:w-[99%]'>
        <h3 className='h3 text-center'>new product</h3>
        <hr className='h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16' />
        {/* container */}
        <div className='space-y-3 gap-9 columns-2 md:columns-3 lg:columns-3'>
            {LATEST.map((item) => (
                <Item  key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} old_price={item.old_price}/>
            ))}
        </div>
    </div>
   </section>
  )
}

export default NewCollections