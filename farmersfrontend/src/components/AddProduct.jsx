import React, { useState } from 'react'
import upload_area from '../assets/upload_area.svg'
import {MdAdd} from 'react-icons/md'
const AddProduct = () => {


     // setting product atribute
    const [image , setImage] = useState(false);
    const [productDetails, setproductDetails] = useState({
        name:"",
        image:"",
    category:"fruit",
price:"",
description:"",    }

    )
    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }

    const ChangeHandler =(e) => {
        setproductDetails({...productDetails, [e.target.name]:e.target.value})
    }
   const ADD_Product = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product',image);




// to add image into uplad image
    await fetch('http://localhost:4000/upload',{
        method:'POST',
        headers:{
            Accept:'application/json',
        },
        body:formData,
    }).then((resp) => resp.json()).then((data) => {responseData = data})
 
    


// to add product into the the host server database
   if(responseData.success){
    product.image = responseData.image_url;
    console.log(product)
    
    await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
            Accept:'application/json',
           'Content-Type' :'application/json'
        },
        body:JSON.stringify(product),}).then((resp) => resp.json()).then((data) => {
            data.success?alert("product Added"):alert("Upload Failed")
        })
   }
}



  return (
    <div className='p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7'>
        <div className='mb-3'>
            <h4 className='bold-18 pb-2'>Product title:</h4>
            <input value={productDetails.name} onChange={ChangeHandler} type="text" name='name' placeholder='Type here..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />

        </div>

        <div className='mb-3'>
            <h4 className='bold-18 pb-2'>Price:</h4>
            <input value={productDetails.price} onChange={ChangeHandler} type="text" name='price' placeholder='Type here..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />

        </div>
        <div className='mb-3'>
            <h4 className='bold-18 pb-2'>Descriptions:</h4>
            
            
<textarea value={productDetails.description} onChange={ChangeHandler} type="text" name='description' placeholder='Type here..'  id="message" rows="4" className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md'  ></textarea>


        </div>
        <div className='mb-3 flex itmes-center gap-x-4'>
            <h4>Product Category:</h4>
            <select value={productDetails.category} onChange={ChangeHandler} name="category" id="" className='bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none'>
             
                <option  value="fruit">Fruit</option>
                <option value="vegetable">Vegetable</option>
                <option value="creal">Creal</option>
            </select>
        </div>
        <div>
            <label htmlFor="file-input">
                <img src={image?URL.createObjectURL(image):upload_area} alt="" className='w-20 rounded-sm inline-block' />
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden className='bg-primary max-w-80 w-full py-3 px-4' />
        </div>
        <button onClick={() => ADD_Product()} className='btn_dark_rounded mt-4 flexCenter gap-x-1'><MdAdd />Add Product</button>

    </div>
  )
}

export default AddProduct