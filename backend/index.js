const port = 4000;
const express = require("express")
const app = express();
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path =require("path")
const cors = require("cors");
const { type } = require("os");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Nesro35:Nesro35@atlascluster.mcunhla.mongodb.net/?retryWrites=true&w=majority")
// api creation
app.get("/", (req, res) => {
    res.send("Express App is running ")
})

//image storage engine
const storage = multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})


//creating upload endpoint for images
app.use('/images', express.static(path.join('upload/images')))

app.post("/upload" , upload.single('product'), (req,res) => {
res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
})
})


//schema for creating products
const Product = mongoose.model("product", {
    id: {
        type: Number ,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image: {
        type: String,
        required:true
    },
    category:{ 
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description: {
        type:String,
        required:true,
    },
    date: {
        type:Date,
        default:Date.now,
    },
    available:{
    type:Boolean,
    default:true,
    },
    user: {
        type: String,
        required: true
      }
})




// Schema user model
const User = mongoose.model('user',{

 
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        
    },
    carData:{
        type:Object,   
    },
    date:{
        type:Date,
        default:Date.now,
    },
    description:{
        type:String,
    },
    location:{
        type:String,
    },
    image:{
       type:String
    }
    })



//creatng api for add products
app.post('/addproduct', async(req, res) => {
    let products = await Product.find({});
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id +1;
    } else {
        id =1;
    }
   
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category: req.body.category,
        price:req.body.price,
        description:req.body.description,
        user:req.body.email,

    });
    console.log(product);
    await product.save();
console.log("Saved")

res.json({
    success:true,
    name:req.body.name,
})
})


// creating api for remove products
app.post('/removeproduct' , async(req, res)=> {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name: req.body.name,

    })
})

// creating api for get userproduct
app.post('/userproduct', async (req, res)=> {
    let products = await Product.find({user: req.body.email });
    console.log("all product fetched")
    console.log(products)
    res.send(products)
});

// creating api for get all_products
app.get('/allproducts', async (req, res)=> {
    let products = await Product.find({});
    console.log("all product fetched")
    res.send(products)
});






    
    
    
    
    // creating endpoint  for registering the user
    app.post('/signup', async(req, res)=>{
    let check = await User.findOne({email: req.body.email});
    let nacheck = await User.findOne({name: req.body.username});
   if(nacheck) {
    return res.status(400).json({success:false, errors:"This name is already in use try Another"})
   }

    if(check){
    return res.status(400).json({success: false, errors:"Existing user found with same email address"})
    }
    let cart ={};
    for (let i =0; i<300; i++) {
    cart[i] = 0;
    
    }
    const user = new User({
    name:req.body.username,
    email:req.body.email,
    password:req.body.password,
  

    cartData:cart,
    })
    await user.save();
    
    const data = {
    user: {
    id:user.id}}
    
    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true,token})
    
    })
    
    
    
    // creating endpoint for user login
    app.post('/login', async (req, res)=>{
        let user = await User.findOne({email: req.body.email});
        if(user){
            const passMatch = req.body.password === user.password;
              if(passMatch) {
                const data = {
                    user: {
                    id:user.id
    
                }}
             
    
                
                    const token = jwt.sign(data, 'secret_ecom');
                    res.json({success:true,token})
               
        }

        else {
            res.json({success:false, errors:"Wrong Password"})
        }
        
    }
    else{
        res.json({success:false, errors:"Wrong Email address"})
    }
    })



// profile image storage engine
const profileimg = multer.diskStorage({
    destination:'./upload/images/profileimg',
    filename:(req,file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const profileup = multer({storage:profileimg})
//creating upload endpoint for images
app.use('/images', express.static(path.join('upload/images/profileimg')))

app.post("/profileup" , profileup.single('profile'), (req,res) => {
res.json({
    success:1,
    image_url:`http://localhost:${port}/images/profileimg/${req.file.filename}`
})
})





// add profile detail
app.post('/addprofile', async(req,res) => {
        let user = await User.findOneAndUpdate({
            email:req.body.email,},       
           {
            "name":req.body.username,
            "image":req.body.image,
            "description":req.body.description,
            "location":req.body.location,});
         console.log(user);
        
        
       
        console.log("profile saved")
        res.json({
            success:true,
            location:req.body.location,
            email:req.body.email,
        })
    }
);


app.post('/profiledetail', async (req, res)=> {
    let userprofile = await User.find({ email:req.body.email});
    console.log(userprofile)
    console.log("profiledetail fetched")
    res.send(userprofile)
} )

   
// app.post('/profile', async (req, res) => {
//     const profile = new User({
//        image:req.body.image,

     
//         })
//         await profile.save();
        
//         const data = {
//         user: {
//         id:profile.id}}
        
//         const token = jwt.sign(data, 'secret_ecom');
//         res.json({success:true,token})
// })


















// server creation on express
app.post
app.listen(port, (error) => {
    if (!error){
        console.log("server is running on port" + port)

    }
    else{
        console.log("error" + error)
    }
})