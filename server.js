const express = require('express');
const  dotenv = require('dotenv')
const {graphqlHTTP} = require("express-graphql")
const schema = require("./graphql/schema")
const app = express()
const {connectDB} = require('./db') 
dotenv.config()
connectDB()
const {createJwtToken} = require('./util/auth');
const {authenticate} = require('./middleware/auth')

app.use(authenticate)
app.get("/",(req,res)=>{
    console.log("+++++++++++++++++++++++++++++++",req.verifiedUser)
    res.json({msg:"graphql reached"})
})
app.get('/authtest', (req,res)=>{
    res.json(createJwtToken({username:'dummy',email:'dummy@gmail.com',displayName:'Dummy'}))
})
app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
    // graphql interface
}))

app.listen(process.env.PORT,()=>{
    console.log(`app is listening at ${process.env.PORT}`)
})