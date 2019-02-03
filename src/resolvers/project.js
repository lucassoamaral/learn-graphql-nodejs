function createdBy(parent, args, context, info) {
    return context.prisma.project({ id: parent.id }).createdBy()
}

function parentProject(parent, args, context, info) {
    return context.prisma.project({ id: parent.id }).parentProject()
}

function subprojects(parent, args, context, info) {
    return context.prisma.project({ id: parent.id }).subprojects()
}
  
module.exports = {
    createdBy,
    parentProject,
    subprojects
}