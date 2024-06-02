const port = 4000;
const express = require("express")
const app = express();
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const path =require("path")
const cors = require("cors");
const { type } = require("os");
const { ObjectId } = require("mongodb");

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
    email: {
        type: String,
        required: true
      },
    
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


// Schema userproduct model
    const UserProduct = mongoose.model('userproduct',{

        userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
        productId: { type: mongoose.Types.ObjectId, ref: 'product', required: true },
        email: { type: String, required: true },
        emailpr: { type: String, required: true },
        productid: {
            type: Number ,
            required:true,
        },
        username:{
            type:String,
        },
        productname:{
            type:String,
        },
        userimage:{
            type:String
         },
         productimage: {
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
             location:{
                type:String,
            },
         description: {
        type:String,
        required:true,
            },
            userimage:{
                type:String
             },
         date: {
        type:Date,
        default:Date.now,
                },
             available:{
             type:Boolean,
                 default:true,
                         },
        
           userrequest:{
                type:String
                        }               



        
    })




    const Request = mongoose.model('request',{
     
       emailrq:{
        type:String
       },
       email:{
        type:String
       },
       price:{
        type:Number,
       
       },
       imagerq:{type:String},

       productname:{
        type:String
       },
       farmername:{type:String},
       farmerimage:{type:String},
       id:{
        type:Number
       }
   
    })


    const UserRequest = mongoose.model('userrequest',{
        userId: { type: mongoose.Types.ObjectId, ref: 'user', required: true },
        productId: { type: mongoose.Types.ObjectId, ref: 'product', required: true },
        emailrq:{
         type:String
        },
        id:{
            type:String
        },
        email:{
         type:String
        },
         emailq:{
         type:String
        },
        username:{
            type:String
        },
        productname:{
            type:String
        },
        price:{
         type:Number,
        
        },
        imagerq:{type:String},
 
        productname:{
         type:String
        }
             
    ,
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
    productimage:{
       type:String
    },
    userimage:{
        type:String
     },
     farmername:{
        type:String
     },farmerimage:{
        type:String
     },

    
     })




     
    const Acceptance = mongoose.model('acceptance',{
    
        emailrq:{
         type:String
        },
        id:{
            type:Number
        },
        email:{
         type:String
        },
         emailq:{
         type:String
        },
        username:{
            type:String
        },
        productname:{
            type:String
        },
        price:{
         type:Number,
        
        },
        imagerq:{type:String},
 
        productname:{
         type:String
        }
             
    ,
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
    productimage:{
       type:String
    },
    userimage:{
        type:String
     },
     farmername:{
        type:String
     },
     farmerimage:{
        type:String
     },
     phonenumber:{
        type:Number
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
        email:req.body.email,

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
    await UserProduct.findOneAndDelete({productid:req.body.productid});
    console.log("Removed");
    res.json({
        success:true,
        name: req.body.name,

    })
})
// creating api for remove products
app.post('/removerequest' , async(req, res)=> {
    await UserRequest.findOneAndDelete({id:req.body.id});
    await Request.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name: req.body.name,

    })
})

// creating api for get userproduct
app.post('/userproduct', async (req, res)=> {
    let products = await UserProduct.find({emailpr: req.body.emailpr });
    console.log("all product fetched")
    console.log(products)
    res.send(products)
});

// creating api for get all_products
app.get('/allproducts', async (req, res)=> {
    let products = await UserProduct.find({});
    console.log("all product fetched")
    res.send(products)
});

// API endpoint to fetch recent product
app.get('/recentproduct', async (req, res) => {
    try {
      // Query MongoDB for the most recent product
      const recentProduct = await UserProduct.find().sort({ date: -1 }).limit(6);
      res.json(recentProduct);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });






  
//   ceate the user request for the product
app.post("/request", async (req,res) => {
 
    const request = new Request({
        id:req.body.id,
        emailrq:req.body.emailrq,
        imagerq:req.body.image,
        productname:req.body.name,
        price:req.body.price,
       email:req.body.email,
       farmername:req.body.farmername,
       farmerimage:req.body.farmerimage,
        

    })
    console.log(request)
    await request.save();
    console.log("Saved")
    res.json({
        success:true,
        name:req.body.name,
    })


})















app.post('/userrequest', async (req, res)=> {
    try {
        const users = await User.find({});
        const userrequests = await Request.find({});
    
        
        let userrq = [];


        for (const user of users) {
            for (const userrequest of userrequests){
            if (user.email === userrequest.email) {
              console.log(`User: ${user}, Product: ${userrequest}`);
              
              

             const existinguserproduct = await UserRequest.findOne({  productId: userrequest._id, });
             if(!existinguserproduct){
                const userRequest = new UserRequest({
                    userId: user._id,
                    productId: userrequest._id,
                    email:user.email ,
                    emailq:userrequest.email ,
                     emailrq:userrequest.emailrq ,
                     username:user.name,
                     farmername:userrequest.farmername,
                     productname:userrequest.productname,
                     userimage:user.image,
                     farmerimage:userrequest.farmerimage,
                     productimage:userrequest.imagerq,
                    id:userrequest.id,
                   
                     price:userrequest.price,
                     location:user.location,
                       
                    
                   
                 
                  });
                  userrq.push(userRequest.save());
             }
      


            
            }
          };
        };
       
        const savedUserProducts = await Promise.all(userrq);
    
        res.status(200).json(savedUserProducts);
      } catch (error) {
        res.status(500).send(error.message);
      }
})






app.post('/requestlist', async (req, res)=> {
    let requests = await UserRequest.find({emailrq: req.body.emailrq });
    console.log("requested product")
    console.log(requests)
    res.send(requests)
});

app.post('/orderedlist', async (req, res)=> {
    let requests = await UserRequest.find({email: req.body.email });
    console.log("ordered product")
    console.log(requests)
    res.send(requests)
});








app.post('/acceptance', async(req, res)=> {
    


  
        const userRequest = new Acceptance({
        
            email:req.body.email,
            emailrq:req.body.emailrq,
             username:req.body.username,
             farmername:req.body.farmername,
             productname:req.body.productname,
             farmerimage:req.body.farmerimage,
             productimage:req.body.productimage,
             id:req.body.id,
           
             price:req.body.price,
            phonenumber:req.body.phonenumber,
               
            
           
         
          });
          console.log(userRequest)
          await userRequest.save();
          console.log("Saved acce")
          res.json({
              success:true,
              name:req.body.name,
          })

    }
)





app.post('/accepted', async (req, res)=> {
    let accept = await Acceptance.find({email: req.body.email });
    console.log("accepted product")
    console.log(accept)
    res.send(accept)
});


app.post('/removeaccepted' , async(req, res)=> {

    await Acceptance.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name: req.body.name,

    })
})


















app.post('/userpro', async (req, res)=> {
    try {
        const users = await User.find({});
        const products = await Product.find({});
    
        
        let userProducts = [];


        for (const user of users) {
            for (const product of products){
            if (user.email === product.email) {
              console.log(`User: ${user}, Product: ${product}`);
              
              

             const existinguserproduct = await UserProduct.findOne({  productId: product._id, });
             if(!existinguserproduct){
                const userProduct = new UserProduct({
                    userId: user._id,
                    productId: product._id,
                    email: user.email,
                     emailpr:product.email ,
                     username:user.name,
                     productname:product.name,
                     userimage:user.image,
                     productimage:product.image,
                     productid:product.id,
                     category:product.category   ,
                     price:product.price,
                     location:user.location,
                       description:product.description,
                      date:product.date ,
                      available:product.available,
                     
                    // add other fields as necessary
                  });
                  userProducts.push(userProduct.save());
             }
      


            
            }
          };
        };
       
        const savedUserProducts = await Promise.all(userProducts);
    
        res.status(200).json(savedUserProducts);
      } catch (error) {
        res.status(500).send(error.message);
      }
})




    
    
    
    
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