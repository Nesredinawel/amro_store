import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {TbTrash} from 'react-icons/tb' 

const Orderedproduct = () => {
 

    const [formData, setFormData] = useState(() => {


        // Retrieve formData from localStorage 
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {};
      });
    

    const [requestproduct, setrequestproduct] = useState([]);
    const fetchInfo = async () => {
    
  
        await fetch('http://localhost:4000/orderedlist',{
          method:'POST',
          headers:{
              Accept:'application/json',
             'Content-Type' :'application/json'
          },
          body:JSON.stringify({email:formData}),
          
        }).then((res) => res.json()).then((data) => {setrequestproduct(data)});
          
      }



    useEffect(() => {
      fetchInfo();
    }, [])

    const remove_product = async (productid) => {
        await fetch ('http://localhost:4000/removerequest',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'content-Type' : 'application/json',

            },
            body:JSON.stringify({id:productid})
        })
        await fetchInfo();
    }


    
    
  return (
    <div className=' p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:p-4 sm:m-7'>
        <h4 className='bold-22 p-5 uppercase'>Product List</h4>
        <div className='w-full mx-h-[77vh] overflow-auto px-4  ' >
        <table className='w-full mx-h-[77vh] overflow-auto px-4 table-auto '>
                <thead>
                    <tr className='bg-primary bold-14  text-start py-16'>
                        <th className='p-2'>Product</th>
                        <th className='p-2'>Title</th>
                        <th className='p-2'>Price</th>
                        <th className='p-2'>Seller</th>
                        <th className='p-2'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {requestproduct.map((product, i)=> (
                        <tr key={i} className='border-b border-slate-900/20 text-gray-20 medium-14'>
                            <td className='flexStart sm:flexCenter px-8 '>
                                <img src={product.productimage} alt="" className='rounded-lg ring-1 ring-slate-900/5 my-1 object-fill w-16 h-16 line-clamp-3' />
                            </td>
                            <td><div className='line-clamp-3 flexCenter '>{product.productname}</div></td>
                            <td><div className='line-clamp-3 flexCenter'>{product.price}</div></td>
                            <td> <div className='pl-14'>
                    <img src={product.farmerimage} alt="" className='rounded-full ring-1 ring-slate-900/5 my-1 object-fill w-11 h-11 line-clamp-3' />
                          <div className=''>{product.farmername}</div></div></td>
                            <td><div className='bold-22 pl-6 sm:pl-14 flexBetween'><TbTrash  onClick={() => remove_product(product.id)}  className='text-red-900 hover:text-red-600' /></div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Orderedproduct
