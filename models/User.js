const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username :{
            type:String,
            required :true
        },
        password:{
            type:String,
            required:true,
            //select:false
        },
        email:{
            type:String,
            required:true,
            unique:true,
            match:[
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                "Please enter valid email"
            ]
        },
        displayName:{
            type:String,
            required:true
        },
    },
    {timestamps:true}
)

module.exports = mongoose.model('user',userSchema)