function newProjectSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.project({ mutation_in: ['CREATED'] }).node()
}

const newProject = {
    subscribe: newProjectSubscribe,
    resolve: payload => payload
}

function newSubprojectSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.project({
            mutation_in: ['CREATED'],
            node: {
                NOT: {
                    parentProject: null
                }
            }
        }).node()
}

const newSubproject = {
    subscribe: newSubprojectSubscribe,
    resolve: payload => payload
}

module.exports = {
    newProject,
    newSubproject
}