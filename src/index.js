const { GraphQLServer  } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

// GraphQL schema implementation (same structure as typeDefs)
const resolvers = {
    Query: {
        projects: (root, args, context) => context.prisma.projects(),
        project: (root, args, context)  => context.prisma.project({ id: args.id })
    },
    Mutation: {
        create: (root, args, context) => {
            return context.prisma.createProject({
                title: args.title,
                description: args.description,
                repositoryUrl: args.repositoryUrl,
                projectUrl: args.projectUrl
            })
        },
        update: (root, args, context) => {
            return context.prisma.updateProject({
                where: { id: args.id },
                data: { title: args.title,  description: args.description, repositoryUrl: args.repositoryUrl, projectUrl: args.projectUrl }
            })
        },
        delete: (root, args, context) => {
            return context.prisma.deleteProject({ id: args.id });
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
    resolvers,
    context: { prisma }
})

server.start(() => console.log('Server is running on http://localhost:4000'))