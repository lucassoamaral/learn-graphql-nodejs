const { GraphQLServer  } = require('graphql-yoga')

// GraphQL schema definition
const typeDefs = `
    type Query {
        projects: [Project!]!
    }

    type Project {
        id: ID!
        title: String!
        description: String
        repositoryUrl: String
        projectUrl: String
    }
`

let projects = [{
        id: 'project-1',
        title: 'Example project'
    }]

// GraphQL schema implementation (same structure as typeDefs)
const resolvers = {
    Query: {
        projects: () => projects
    },
    Project: {
        id: (parent) => parent.id,
        title: (parent) => parent.title,
        description: (parent) => parent.description,
        repositoryUrl: (parent) => parent.repositoryUrl,
        projectUrl: (parent) => parent.projectUrl
    }
}

// Creates the server with the configured schemas and operations
const server = new GraphQLServer ({
    typeDefs,
    resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))