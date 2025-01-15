const express = require("express")
const multer = require("multer")
const {CloudinaryStorage} = require("multer-storage-cloudinary")
const cloudinary = require("cloudinary").v2
const path = require("path")
require ("dotenv").config()

const PORT = 8181

const app = express()
app.use(express.json());

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})


const storage = new CloudinaryStorage({
    cloudinary : cloudinary,
    params : {
        folder:"uploads",
        resource_type: "auto" //auto detect the file type
    }
})


//multer is initiated
const upload = multer({storage});

app.get("/", (req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"index.html"))
})

app.post("/upload", upload.single("file"),(req,res)=>{
    if (req.file && req.file.path){
        res.status(200).json({
            message: "File uploaded sucessfully",
            imageUrl: req.file.path
        });
    }
})

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
}) 