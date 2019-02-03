function projects(root, args, context, info) {
    return context.prisma.projects()
}

function project(root, args, context, info) {
    context.prisma.project({ id: args.id })
}

module.exports = {
    projects,
    project
}