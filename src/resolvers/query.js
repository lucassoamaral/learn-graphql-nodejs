async function projects(root, args, context, info) {
    const where = args.filter ? {
        OR: [
            { title_contains: args.filter },
            { description_contains: args.filter },
            { repositoryUrl_contains: args.filter },
            { projectUrl_contains: args.filter }
        ]
    } : {}

    const projects =  await context.prisma.projects({ 
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy
    })

    const count = await context.prisma.projectsConnection({ where })
        .aggregate()
        .count()

    return {
        projects,
        count
    }
}

function project(root, args, context, info) {
    return context.prisma.project({ id: args.id })
}

module.exports = {
    projects,
    project
}