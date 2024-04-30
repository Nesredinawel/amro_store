import React, { useContext } from 'react'

import {MdStar} from "react-icons/md"
import { ShopContext } from '../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
  <section>
    <div className='flex flex-col   gap-14 xl:flex-row p-5'>
        {/* left side */}
      <div className=' rounded-md overflow-hidden shadow-lg flex xs:w-96   '>
      
        
            <img className='object-fill w-96' src={product.image} alt="" />
        </div>
      
        {/* right side */}
        <div className='gap-10 flex-col flex xl:flex-[1.7]'>
        <h3 className='bold-28 -y-20'>{product.name}</h3>
        <div className='gap-10 flex-col flex pl-3'>
            
        <p className='gap-10'>{product.description}</p>
           
           
                <div className='  flex flex-col gap-y-3  max-w-[300px]'>
                    <button onClick={() => {addToCart(product.id)}} className='btn_dark_outline !rounded-none uppercase regular-14 traacking-windest '>Add to cart</button>
                    <button className='btn_dark_rounded !rounded-none uppercase regular-14 traacking-windest '>order it now</button>
                </div>
               
             

            </div>
        </div>
        </div>
     
       
    
  </section>
  )
}

export default ProductDisplay