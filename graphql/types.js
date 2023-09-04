const { GraphQLObjectType, GraphQLID, GraphQLString,GraphQLList } =  require("graphql")

const {Post, User, Comment} =  require("../models")

const UserType = new GraphQLObjectType({
    name:'User',
    description:'User Type',
    fields:()=>({
        id:{type:GraphQLID},
        username:{type:GraphQLString},
        email:{type:GraphQLString},
        displayName:{type:GraphQLString},
    })
})

const PostType = new GraphQLObjectType({
    name:'Post',
    description:'Post Type',
    fields:()=>({
        id:{type:GraphQLID},
        title:{type:GraphQLString},
        body:{type:GraphQLString},
        author:{
            type:UserType,
            resolve(parent,args){
                return User.findById(parent.authorID)
            }
        },
        comments:{
            type: GraphQLList(CommentType),
            resolve(parent,args){
                return Comment.find({postId:parent.id})
            }
        }
    })
})

const CommentType = new GraphQLObjectType({
    name:'Comment',
    description:'Comment Type',
    fields:()=>({
        id:{type:GraphQLID},
        comment:{type:GraphQLString},
        user:{
            type:UserType,
            resolve(parent,args){
                return User.findById(parent.userId)
            }
        },
        post:{
            type:PostType,
            resolve(parent,args){
                return Post.findById(parent.postId)
            }
        }
    })
})

module.exports = {UserType,PostType,CommentType}

