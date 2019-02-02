const { GraphQLServer  } = require('graphql-yoga')

// GraphQL schema definition
const typeDefs = `
    type Query {
        info: String!
    }
`

// GraphQL schema implementation (same structure as typeDefs)
const resolvers = {
    Query: {
        info: () => 'This is the GraphQl API example'
    }
}

// Creates the server with the configured schemas and operations
const server = new GraphQLServer ({
    typeDefs,
    resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))