const express = require('express');
const  dotenv = require('dotenv')
const {graphqlHTTP} = require("express-graphql")
const schema = require("./graphql/schema")
const app = express()
const {connectDB} = require('./db') 
dotenv.config()
connectDB()
app.get("/",(req,res)=>{
    res.json({msg:"reached"})
})
app.get('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}))

app.listen(process.env.PORT,()=>{
    console.log(`app is listening at ${process.env.PORT}`)
})