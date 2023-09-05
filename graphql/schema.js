const { GraphQLSchema,GraphQLObjectType } = require("graphql")

const {users,user,posts,post,comments,comment} = require("./queries")
const {register , login, addPost, addComment, updatePost} = require("./mutations")

const QueryType = new GraphQLObjectType({
    name:'QueryType',
    description:'Queries',
    fields:{
        users,user,posts,post,comments,comment
    },
})

const MutationType = new GraphQLObjectType({
    name:'MutationType',
    description:'Mutations',
    fields:{register, login, addPost ,addComment ,updatePost}
})
module.exports = new GraphQLSchema({
    query:QueryType,
    mutation:MutationType
})