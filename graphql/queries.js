const { GraphQLList, GraphQLID } = require('graphql')

const { UserType } = require('./types')
const {User} = require('../models')

const users = {
    type: new GraphQLList(UserType),
    resolve(parent,args){
        return User.find()
    }
}

const user = {
    type:UserType,
    description:'Retrieves one User',
    args:{
        id:{type:GraphQLID}
    },
    resolve(parent,args){
        return User.findById(args.id)
    }
}

module.exports = {users,user}