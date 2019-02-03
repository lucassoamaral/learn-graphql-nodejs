function newProjectSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.project({ mutation_in: ['CREATED'] }).node()
}

const newProject = {
    subscribe: newProjectSubscribe,
    resolve: payload => payload
}

module.exports = {
    newProject
}