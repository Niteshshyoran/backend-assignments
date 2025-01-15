const express = require('express')
const fs = require('fs');
const validationMiddleware = require('./middleware/validation-middleware');
// const { message } = require('status');
// const status = require('status');
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).json({message:"working okay"})
})



app.post('/', validationMiddleware,(req,res)=>{
res.status(200).json({message: "data recived"})
});

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`)
});

