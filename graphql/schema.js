const { GraphQLSchema,GraphQLObjectType } = require("graphql")

const {users} = require("./queries")
const {register , login} = require("./mutations")

const QueryType = new GraphQLObjectType({
    name:'QueryType',
    description:'Queries',
    fields:{
        users
    },
})

const MutationType = new GraphQLObjectType({
    name:'MutationType',
    description:'Mutations',
    fields:{register , login}
})
module.exports = new GraphQLSchema({
    query:QueryType,
    mutation:MutationType
})