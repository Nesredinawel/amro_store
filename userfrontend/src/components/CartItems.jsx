import React, { useContext } from 'react'
import {TbTrash} from 'react-icons/tb'
import { ShopContext } from '../Context/ShopContext'

const CartItems = () => {
    const {all_products, cartItems,removeFromCart , getTotalCartAmount,getTotalCartItems} = useContext(ShopContext)
  return (
    <section className='max_padd_container pt-20 w-full '>
        <table className='w-full mx-auto'>
            <thead>
                <tr className='bg-slate-900/10 regular-18 sm:regular-22 text-start py-12'>
                    <th className='p-1 py-2'>Products</th>
                    <th className='p-1 py-2'>Title</th>
                    <th className='p-1 py-2'>Price</th>
                    <th className='p-1 py-2'>Quantity</th>
                    <th className='p-1 py-2'>Total</th>
                    <th className=' '></th>
                </tr>
            </thead>
            <tbody>
                {all_products.map((e) => {
                    if (cartItems[e.productid] > 0) {
                        return <tr className='border-b border-slate-900/20 p-6 medium-14 text-center' key={e.productid}>
                            <td className='flexCenter'><img className='rounded-lg ring-1 ring-slate-900/5 my-1 h-14 object-fill w-10' src={e.productimage} alt="prodimg" /></td>
                            <td><div className='line-clamp-3 '>{e.productname}</div></td>
                            <td className='w-16 h-16 bg-white'>${e.price}</td>
                            <td>{cartItems[e.productid]}</td>

                            <td>${e.price * cartItems[e.productid]}</td>
                          
                            <td>
                            <td><div className='bold-22 pl-80 sm:pl-14 flexCenter'><TbTrash onClick={() => removeFromCart(e.productid)} className='text-red-900 hover:text-red-600' /></div></td>
                            </td>
                        </tr>
                    }
                    return null;
                })}
            </tbody>
        </table>
       <div className='flexCenter'>
       <div className='flexCenter flex-col  my-10 p-8
         md:flex-row rounded-md
          bg-white w-full max-w-[400px] shadow-lg'>
            <div className='flex flex-col gap-10'>
                <h4 className='bold-22 justify-center flex'>Summary</h4>
               
               
                <div className='flexBetween py-4'><h4 className='medium-16'>
                    Amount:</h4>
                    <h4 className='text-gray-30 font-semibold'>{getTotalCartItems()}</h4></div>
                    <hr />
                    <div className='flexBetween py-4'>
                        <h4 className='bold-18'>Total price:</h4>
                        <h4 className='bold-18'>${getTotalCartAmount()}</h4>
                    </div>
                  
                  
            </div>
        </div>
       </div>
    </section>

  )
}

export default CartItems