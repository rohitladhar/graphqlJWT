const { GraphQLSchema,GraphQLObjectType } = require("graphql")

const {} = require("./queries")
const {} = require("./mutations")

const QueryType = new GraphQLObjectType({
    name:'QueryType',
    description:'Queries',
    fields:{

    },
})

const MutationType = new GraphQLObjectType({
    name:'MutationType',
    description:'Mutations',
    fields:{

    }
})
module.exports = new GraphQLSchema({
    query:QueryType,
    mutation:MutationType
})