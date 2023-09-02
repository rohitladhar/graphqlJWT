const express = require('express');
const  dotenv = require('dotenv')
const app = express()
dotenv.config()

app.get("/",(req,res)=>{
    res.json({msg:"reached"})
})

app.listen(process.env.PORT,()=>{
    console.log(`app is listening at ${process.env.PORT}`)
})