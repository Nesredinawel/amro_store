import React, { useEffect,useState } from 'react'
import {TbTrash} from 'react-icons/tb'
import IvitationForm from './IvitationForm';

const OrderedProduct = () => {
 
  const [formData, setFormData] = useState(() => {


    // Retrieve formData from localStorage 
    const storedData = localStorage.getItem('formData');
    return storedData ? JSON.parse(storedData) : {};
  });


const [requestproduct, setrequestproduct] = useState([]);
const fetchInfo = async () => {


    await fetch('http://localhost:4000/requestlist',{
      method:'POST',
      headers:{
          Accept:'application/json',
         'Content-Type' :'application/json'
      },
      body:JSON.stringify({emailrq:formData}),
      
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








    // invitation form modal
    const [showModal, setShowModal] = useState(false);

    const handleClick = (product) => {
      setShowModal(product);
    };
  
   
  
  

  

    
  return (
    <div className='p-2 box-border bg-white mb-0 rounded-sm w-full mt-4 sm:p-4 sm:m-7'>
        <h4 className='bold-22 p-5 uppercase'>Ordered Product List</h4>
        <div className='w-full mx-h-[77vh] overflow-auto px-4  ' >
            <table className='w-full mx-h-[77vh] overflow-auto px-4 table-auto '>
                <thead>
                    <tr className='bg-primary bold-14  text-start py-16'>
                        <th className='p-2'>Buyers</th>
                        <th className='pl-20'>Product</th>
                        <th className='pr-20'>Title</th>
                        <th className='pr-56'>Price</th>
                        <th className='p-2'>Status</th>
                        <th className='pr-16'></th>
                    </tr>
                </thead>
                <tbody>
                    {requestproduct.map((product, i)=> (
                        <tr key={i} className='border-b border-slate-900/20 text-gray-20 medium-14'>
                             <td >
                               <div className='flexStart sm:flexCenter px-8 gap-2 bg-gray-400  bg-opacity-25 rounded-xl'> <img src={product.userimage} alt="" className='rounded-full ring-1 ring-slate-900/5 my-1 object-fill w-10 h-10 line-clamp-3 ' />
                              <div>  <div className=' '>{product.username}</div></div></div>
                              <div className='flexStart sm:flexCenter px-8 gap-2'>{product.location}</div>
                            </td>
                              <td className='pl-24 '>
                                <img src={product.productimage} alt="" className='rounded-lg ring-1 ring-slate-900/5 my-1 object-fill w-16 h-16 line-clamp-3' />
                            </td>
                            <td><div className='line-clamp-3 flexCenter pr-20 '>{product.productname}</div></td>
                            <td><div className='line-clamp-3 flexCenter pr-56'>{product.price}</div></td>
                            <td >
                            <div onClick={() => handleClick(product)} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16 "}> 
                              <div>Accept</div>
                        
                           
                                 </div> 
                            </td>
                            <td><div className='pl-4'><div  onClick={() => remove_product(product.id)}  className={"btn_remove_rounded flexCenter gap-x-2 medium-16 "}>Decline</div></div></td>
                
                        </tr>
                    ))}
                          {showModal &&       <IvitationForm
                         show={showModal} 
                      acceptance={showModal}
                     
                       />}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OrderedProduct
