import React, { useEffect, useState } from 'react'
import upload_area from '../assets/upload_area.svg'
import {MdAdd} from 'react-icons/md'
const AddProfile = () => {
    
  useEffect(() => {
    // Retrieve formData from localStorage
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      setFormData(parsedFormData);
      
       // Pre-fill detaildes state with the email from formData
       setprofileDetails({ email: parsedFormData});

      // Clear formData from localStorage after retrieving it
      // localStorage.removeItem('formData');
    }
  }, []);
    
  const [formData, setFormData] = useState({ });
    const [image , setImage] = useState(false);
    const [profiledetails, setprofileDetails] = useState({
      email:'',
      username:"",
      image:"",
  description:"", 
  location:"",   
})
  
  const imageHandler = (e) => {
    setImage(e.target.files[0])
  }
  
  const ChangeHandler =(e) => {
    setprofileDetails({...profiledetails, [e.target.name]:e.target.value})
  }
  
  const ADD_Profile = async () => {
    console.log(profiledetails);
    let responseData;
    let profile = profiledetails;
    let formData = new FormData();
    formData.append('profile',image);



  
  
  
    // to add profile image into profileup image
    await fetch('http://localhost:4000/profileup',{
      method:'POST',
      headers:{
          Accept:'application/json',
      },
      body:formData,
    }).then((resp) => resp.json()).then((data) => {responseData = data})


  // to add prodetail into the the host server database
  if(responseData.success){
    profile.image = responseData.image_url;
    console.log(profile)
    
    await fetch('http://localhost:4000/addprofile',{
        method:'POST',
        headers:{
            Accept:'application/json',
           'Content-Type' :'application/json'
        },
        body:JSON.stringify(profile),}).then((resp) => resp.json()).then((data) => {
            data.success?alert("profile Added"):alert("Upload Failed")
        })
   }  
  
  }



  return (
    <div className='p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7'>
    <div className='mb-3'>
        <h4 className='bold-18 pb-2'>User Name:</h4>
        <input value={profiledetails.username} onChange={ChangeHandler} type="text" name='usename' placeholder='Type here..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />

    </div>

    <div className='mb-3'>
        <h4 className='bold-18 pb-2'>Email:</h4>
        <input  type="text" name='name' placeholder={formData} className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' readOnly />

    </div>


   
    <div className='mb-3'>
        <h4 className='bold-18 pb-2'>Descriptions:</h4>
        
        
<textarea value={profiledetails.description} onChange={ChangeHandler} type="text" name='description' placeholder='Type here..'  id="message" rows="4" className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md'  ></textarea>


    </div>


    <div className='mb-3'>
        <h4 className='bold-18 pb-2'>Location:</h4>
        <input value={profiledetails.location} onChange={ChangeHandler} type="text" name='location' placeholder='Type here..' className='bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md' />

    </div>



    
   
    <div>
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} alt="" className='w-20 rounded-sm inline-block' />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden className='bg-primary max-w-80 w-full py-3 px-4' />
    </div>
    <button onClick={() => ADD_Profile()} className='btn_dark_rounded mt-4 flexCenter gap-x-1'><MdAdd />Add Profile</button>

</div>
  )
}

export default AddProfile
