function newProjectSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.project({ mutation_in: ['CREATED'] }).node()
}

const newProject = {
    subscribe: newProjectSubscribe,
    resolve: payload => payload
}

function newSubprojectSubscribe(parent, args, context, info) {
    var createdProject = context.prisma.$subscribe.project({ mutation_in: ['CREATED'] }).node()
    if (createdProject && createdProject.parentProject)
        return createdProject
}

const newSubproject = {
    subscribe: newSubprojectSubscribe,
    resolve: payload => payload
}

module.exports = {
    newProject,
    newSubproject
}