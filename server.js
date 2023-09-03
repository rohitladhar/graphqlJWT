const express = require('express');
const  dotenv = require('dotenv')
const app = express()
const {connectDB} = require('./db') 
dotenv.config()
connectDB()
app.get("/",(req,res)=>{
    res.json({msg:"reached"})
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening at ${process.env.PORT}`)
})