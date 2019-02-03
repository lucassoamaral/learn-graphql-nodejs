const { GraphQLServer  } = require('graphql-yoga')

let projects = []

let idCount = projects.length

// GraphQL schema implementation (same structure as typeDefs)
const resolvers = {
    Query: {
        projects: () => projects
    },
    Mutation: {
        post: (parent, args) => {
            const project = {
                id: `project-${idCount++}`,
                title: args.title,
                description: args.description,
                repositoryUrl: args.repositoryUrl,
                projectUrl: args.projectUrl
            }

            projects.push(project)
            return project
        }
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
    typeDefs: './schema.graphql',
    resolvers
})

server.start(() => console.log('Server is running on http://localhost:4000'))