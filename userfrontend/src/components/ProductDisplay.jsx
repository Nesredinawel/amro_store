import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { ShopContext } from '../Context/ShopContext'
const ProductDisplay = (props) => {

  
  const {product} = props;
  const {addToCart} = useContext(ShopContext)




  const [requestproduct, setrequestproduct] = useState({
    name:'',
    image:'',

price:'',
id:'',
farmername:'',
email:"",
emailrq:'',
farmerimage:'',
  })

  useEffect(() => {
    // Retrieve formData from localStorage
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
     
      
       // Pre-fill detaildes state with the email from formData
       setrequestproduct({ email: parsedFormData,
        name:product.productname,
        image:product.productimage ,
        farmername:product.username,
        farmerimage:product.userimage,
    price:product.price,
    id:product.productid,
   
    emailrq:product.email,
       });

    }
  }, []);





    const Order_Product = async () => {
       
    await fetch('http://localhost:4000/request',{
      method:'POST',
      headers:{
          Accept:'application/json',
         'Content-Type' :'application/json'
      },
      body:JSON.stringify(requestproduct),}).then((resp) => resp.json()).then((data) => {
          data.success?alert("ordered successfully"):alert("Order Failed")
      })

      await fetch('http://localhost:4000/userrequest',{
        method:'POST',
        headers:{
            Accept:'application/json',
           'Content-Type' :'application/json'
        },
        body:JSON.stringify(requestproduct),}).then((resp) => resp.json()).then((data) )





    }

  return (
  <section>
    <div className='flex flex-col   gap-14 xl:flex-row p-5'>
        {/* left side */}
     <div className='space-y-6'>
     <div className=' rounded-md overflow-hidden shadow-lg flex xs:w-96   '>
      
        
      <img className='object-fill w-96' src={product.productimage} alt="" />
    

 


  </div>
  <div className='rounded-2xl bg-slate-300 bg-opacity-45 px-3 py-1 flex gap-5 w-96 '>
<img className='rounded-full h-10 w-10' src={product.userimage} alt="" />

<div className=''>
<div className=' font-bold text-slate-900'>{product.username}</div>
<div  className="w-28  truncate text-gray-20">{product.date}</div>
<div className=' font-bold text-slate-900'>Email: {product.email}</div>
</div>

</div>
<div className='rounded-2xl bg-slate-600 bg-opacity-45 px-3 py-1 flex gap-5 w-96 '>

<div className=' font-bold text-slate-900'>Location: {product.location}</div>
</div>


     </div>
        {/* right side */}
        <div className='gap-10 flex-col flex xl:flex-[1.7]'>
        <h3 className='bold-28 -y-20'>{product.productname}</h3>
        <div className='gap-10 flex-col flex pl-3'>
            
        <p className='gap-10'>{product.description}</p>
           
           
                <div className='  flex flex-col gap-y-3  max-w-[300px]'>
                    <button onClick={() => {addToCart(product.productid)}} className='btn_dark_outline !rounded-none uppercase regular-14 tracking-windest '>Add to cart</button>
                    <button className='btn_dark_rounded !rounded-none uppercase regular-14 tracking-windest flexCenter'  onClick={() => Order_Product()}> order it now</button>
                </div>
               
             

            </div>
        </div>
        </div>


       
    
  </section>
  )
}

export default ProductDisplay