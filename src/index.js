const { GraphQLServer  } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/query')
const Mutation = require('./resolvers/mutation')
const User = require('./resolvers/user')
const Project = require('./resolvers/project')
const Subscription = require('./resolvers/subscription')

// GraphQL schema implementation (same structure as typeDefs)
const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Project
}

// Creates the server with the configured schemas and operations
const server = new GraphQLServer ({
    typeDefs: './schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma
        }
    }
})

server.start(() => console.log('Server is running on http://localhost:4000'))