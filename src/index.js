const { GraphQLServer  } = require('graphql-yoga')

let projects = []

let idCount = projects.length

// GraphQL schema implementation (same structure as typeDefs)
const resolvers = {
    Query: {
        projects: () => projects,
        project: (parent, args) => projects.find(item => item.id === args.id)
    },
    Mutation: {
        create: (parent, args) => {
            const project = {
                id: `project-${idCount++}`,
                title: args.title,
                description: args.description,
                repositoryUrl: args.repositoryUrl,
                projectUrl: args.projectUrl
            }

            projects.push(project)
            return project
        },
        update: (parent, args) => {
            const project = projects.find(item => item.id === args.id)
            if (project) {
                if (args.title)
                    project.title = args.title

                if (args.description)
                    project.description = args.description

                if (args.repositoryUrl)
                    project.repositoryUrl = args.repositoryUrl

                if (args.projectUrl)
                    project.projectUrl = args.projectUrl
            }

            return project
        },
        delete: (parent, args) => {
            var project = projects.find(item => item.id === args.id)
            if (project) {
                delete projects[projects.indexOf(project)]
            }
            
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