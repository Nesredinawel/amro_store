import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import profile from '../assets/product_22.png'
const Item = ({productid,username,productimage,price,userimage, productname,date}) => {



  return (
    <div className=''>
      <div className=' rounded-md overflow-hidden shadow-lg'>
      <div className='relative flexCenter group overflow-hidden transition-all duration-100'>
      <Link to={`/product/${productid}`} onClick={window.scroll(0 , 0)} className='h-7 w-40 bg-secondary bg-opacity-85 rounded-lg flexCenter absolute top-1/2 !py-2 z-20 scale-0 group-hover:scale-100 transition-all duration-700'>
      <span className=' medium-14 font-bold '>More Detail</span>

      </Link>
        <img src={productimage} alt='productImage' className=' w-full block object-cover group-hover:scale-110 transition-all duration-1000'/>
      </div>
      <div className='p-4 overflow-hidden'>
        <h4 className='my-[6px] medium-16 line-clamp-2 text-gray-30'>{productname}</h4>
      <div className='flex gap-1'>
        <h2 className='medium-16'>Price :</h2>
        <div className='bold-16' >
            {price}.00
        </div>
      
      </div>
      </div>
      <div className='bg-slate-300 bg-opacity-45 px-3 py-1 flex gap-5'>
      <img className='rounded-full h-10 w-10' src={userimage} alt="" />

      <div>
      <div className=' font-bold text-slate-900'>{username}</div>
      <div  className="w-28  truncate text-gray-20">{date}</div>
      </div>
    
      </div>
     
    </div>
    </div>
    
  )
}

export default Item