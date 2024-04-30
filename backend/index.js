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



// creating api for get all_products
app.get('/allproducts', async (req, res)=> {
    let products = await Product.find({});
    console.log("all product fetched")
    res.send(products)
});




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