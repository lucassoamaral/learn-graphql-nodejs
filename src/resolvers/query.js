function projects(root, args, context, info) {
    const where = args.filter ? {
        OR: [
            { title_contains: args.filter },
            { description_contains: args.filter },
            { repositoryUrl_contains: args.filter },
            { projectUrl_contains: args.filter }
        ]
    } : {}

    return context.prisma.projects({ where })
}

function project(root, args, context, info) {
    return context.prisma.project({ id: args.id })
}

module.exports = {
    projects,
    project
}