const jwt =  require('jsonwebtoken')

const createJwtToken = user =>{
    return jwt.sign(user,process.env.JWTTOKENSECRET,{
        expiresIn:process.env.JWTEXPIRESIN
    })
}

module.exports = {createJwtToken}