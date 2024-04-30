import React from 'react'
import { BiSolidRightArrowAlt } from "react-icons/bi";
import { Link } from 'react-router-dom';

const ProductHd = (props,category) => {
    const {product} =props;
  return (
  <div className='flex items-center flex-wrap gap-x-2 medium-16 my-4 capitalize '>
    <Link to={`/`} onClick={window.scroll(0 , 0)}>
    <span className='hover:text-secondary '>Home</span></Link> <BiSolidRightArrowAlt /><Link to={`/${product.category}`} onClick={window.scroll(0 , 0)}>
    <span className='hover:text-secondary '>{product.category}</span></Link> 
    <BiSolidRightArrowAlt /> <span className='text-secondary'>{product.name}</span>
  </div>

  )
}

export default ProductHd