const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function createProject(parent, args, context, info) {
    const userId = getUserId(context)

    return context.prisma.createProject({
        title: args.title,
        description: args.description,
        repositoryUrl: args.repositoryUrl,
        projectUrl: args.projectUrl,
        createdBy: { connect: { id: userId }}
    })
}

function updateProject(parent, args, context, info) {
    getUserId(context)

    return context.prisma.updateProject({
        where: { id: args.id },
        data: { title: args.title,  description: args.description, repositoryUrl: args.repositoryUrl, projectUrl: args.projectUrl }
    })
}

function deleteProject(parent, args, context, info) {
    getUserId(context)

    return context.prisma.deleteProject({ id: args.id })
}

async function addChild(parent, args, context, info) {
    const userId = getUserId(context)

    const projectExists = await context.prisma.$exists.project({
        id: args.parentId
    })

    if (!projectExists) {
        throw new Error(`The parent project doesn't exists: ${args.parentId}`)
    }

    return context.prisma.createProject({
        title: args.title,
        description: args.description,
        repositoryUrl: args.repositoryUrl,
        projectUrl: args.projectUrl,
        createdBy: { connect: { id: userId }},
        parentProject: { connect: { id: args.parentId }}
    })
}

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await context.prisma.createUser({ ...args, password })
    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    } 
}

async function login(parent, args, context, info) {
    const user = await context.prisma.user({ email: args.email })
    if (!user) {
      throw new Error('No such user found')
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    return {
      token,
      user,
    }
  }
  

module.exports = {
    createProject,
    updateProject,
    deleteProject,
    addChild,
    signup,
    login
}