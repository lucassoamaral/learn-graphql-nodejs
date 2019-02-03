module.exports = {
        typeDefs: /* GraphQL */ `type AggregateProject {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createProject(data: ProjectCreateInput!): Project!
  updateProject(data: ProjectUpdateInput!, where: ProjectWhereUniqueInput!): Project
  updateManyProjects(data: ProjectUpdateManyMutationInput!, where: ProjectWhereInput): BatchPayload!
  upsertProject(where: ProjectWhereUniqueInput!, create: ProjectCreateInput!, update: ProjectUpdateInput!): Project!
  deleteProject(where: ProjectWhereUniqueInput!): Project
  deleteManyProjects(where: ProjectWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Project {
  id: ID!
  createdAt: DateTime!
  title: String!
  description: String
  repositoryUrl: String
  projectUrl: String
  createdBy: User
  parentProject: Project
  subprojects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

type ProjectConnection {
  pageInfo: PageInfo!
  edges: [ProjectEdge]!
  aggregate: AggregateProject!
}

input ProjectCreateInput {
  title: String!
  description: String
  repositoryUrl: String
  projectUrl: String
  createdBy: UserCreateOneWithoutProjectsInput
  parentProject: ProjectCreateOneWithoutSubprojectsInput
  subprojects: ProjectCreateManyWithoutParentProjectInput
}

input ProjectCreateManyWithoutCreatedByInput {
  create: [ProjectCreateWithoutCreatedByInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateManyWithoutParentProjectInput {
  create: [ProjectCreateWithoutParentProjectInput!]
  connect: [ProjectWhereUniqueInput!]
}

input ProjectCreateOneWithoutSubprojectsInput {
  create: ProjectCreateWithoutSubprojectsInput
  connect: ProjectWhereUniqueInput
}

input ProjectCreateWithoutCreatedByInput {
  title: String!
  description: String
  repositoryUrl: String
  projectUrl: String
  parentProject: ProjectCreateOneWithoutSubprojectsInput
  subprojects: ProjectCreateManyWithoutParentProjectInput
}

input ProjectCreateWithoutParentProjectInput {
  title: String!
  description: String
  repositoryUrl: String
  projectUrl: String
  createdBy: UserCreateOneWithoutProjectsInput
  subprojects: ProjectCreateManyWithoutParentProjectInput
}

input ProjectCreateWithoutSubprojectsInput {
  title: String!
  description: String
  repositoryUrl: String
  projectUrl: String
  createdBy: UserCreateOneWithoutProjectsInput
  parentProject: ProjectCreateOneWithoutSubprojectsInput
}

type ProjectEdge {
  node: Project!
  cursor: String!
}

enum ProjectOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  repositoryUrl_ASC
  repositoryUrl_DESC
  projectUrl_ASC
  projectUrl_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ProjectPreviousValues {
  id: ID!
  createdAt: DateTime!
  title: String!
  description: String
  repositoryUrl: String
  projectUrl: String
}

input ProjectScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  repositoryUrl: String
  repositoryUrl_not: String
  repositoryUrl_in: [String!]
  repositoryUrl_not_in: [String!]
  repositoryUrl_lt: String
  repositoryUrl_lte: String
  repositoryUrl_gt: String
  repositoryUrl_gte: String
  repositoryUrl_contains: String
  repositoryUrl_not_contains: String
  repositoryUrl_starts_with: String
  repositoryUrl_not_starts_with: String
  repositoryUrl_ends_with: String
  repositoryUrl_not_ends_with: String
  projectUrl: String
  projectUrl_not: String
  projectUrl_in: [String!]
  projectUrl_not_in: [String!]
  projectUrl_lt: String
  projectUrl_lte: String
  projectUrl_gt: String
  projectUrl_gte: String
  projectUrl_contains: String
  projectUrl_not_contains: String
  projectUrl_starts_with: String
  projectUrl_not_starts_with: String
  projectUrl_ends_with: String
  projectUrl_not_ends_with: String
  AND: [ProjectScalarWhereInput!]
  OR: [ProjectScalarWhereInput!]
  NOT: [ProjectScalarWhereInput!]
}

type ProjectSubscriptionPayload {
  mutation: MutationType!
  node: Project
  updatedFields: [String!]
  previousValues: ProjectPreviousValues
}

input ProjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProjectWhereInput
  AND: [ProjectSubscriptionWhereInput!]
  OR: [ProjectSubscriptionWhereInput!]
  NOT: [ProjectSubscriptionWhereInput!]
}

input ProjectUpdateInput {
  title: String
  description: String
  repositoryUrl: String
  projectUrl: String
  createdBy: UserUpdateOneWithoutProjectsInput
  parentProject: ProjectUpdateOneWithoutSubprojectsInput
  subprojects: ProjectUpdateManyWithoutParentProjectInput
}

input ProjectUpdateManyDataInput {
  title: String
  description: String
  repositoryUrl: String
  projectUrl: String
}

input ProjectUpdateManyMutationInput {
  title: String
  description: String
  repositoryUrl: String
  projectUrl: String
}

input ProjectUpdateManyWithoutCreatedByInput {
  create: [ProjectCreateWithoutCreatedByInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutCreatedByInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutCreatedByInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithoutParentProjectInput {
  create: [ProjectCreateWithoutParentProjectInput!]
  delete: [ProjectWhereUniqueInput!]
  connect: [ProjectWhereUniqueInput!]
  disconnect: [ProjectWhereUniqueInput!]
  update: [ProjectUpdateWithWhereUniqueWithoutParentProjectInput!]
  upsert: [ProjectUpsertWithWhereUniqueWithoutParentProjectInput!]
  deleteMany: [ProjectScalarWhereInput!]
  updateMany: [ProjectUpdateManyWithWhereNestedInput!]
}

input ProjectUpdateManyWithWhereNestedInput {
  where: ProjectScalarWhereInput!
  data: ProjectUpdateManyDataInput!
}

input ProjectUpdateOneWithoutSubprojectsInput {
  create: ProjectCreateWithoutSubprojectsInput
  update: ProjectUpdateWithoutSubprojectsDataInput
  upsert: ProjectUpsertWithoutSubprojectsInput
  delete: Boolean
  disconnect: Boolean
  connect: ProjectWhereUniqueInput
}

input ProjectUpdateWithoutCreatedByDataInput {
  title: String
  description: String
  repositoryUrl: String
  projectUrl: String
  parentProject: ProjectUpdateOneWithoutSubprojectsInput
  subprojects: ProjectUpdateManyWithoutParentProjectInput
}

input ProjectUpdateWithoutParentProjectDataInput {
  title: String
  description: String
  repositoryUrl: String
  projectUrl: String
  createdBy: UserUpdateOneWithoutProjectsInput
  subprojects: ProjectUpdateManyWithoutParentProjectInput
}

input ProjectUpdateWithoutSubprojectsDataInput {
  title: String
  description: String
  repositoryUrl: String
  projectUrl: String
  createdBy: UserUpdateOneWithoutProjectsInput
  parentProject: ProjectUpdateOneWithoutSubprojectsInput
}

input ProjectUpdateWithWhereUniqueWithoutCreatedByInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutCreatedByDataInput!
}

input ProjectUpdateWithWhereUniqueWithoutParentProjectInput {
  where: ProjectWhereUniqueInput!
  data: ProjectUpdateWithoutParentProjectDataInput!
}

input ProjectUpsertWithoutSubprojectsInput {
  update: ProjectUpdateWithoutSubprojectsDataInput!
  create: ProjectCreateWithoutSubprojectsInput!
}

input ProjectUpsertWithWhereUniqueWithoutCreatedByInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutCreatedByDataInput!
  create: ProjectCreateWithoutCreatedByInput!
}

input ProjectUpsertWithWhereUniqueWithoutParentProjectInput {
  where: ProjectWhereUniqueInput!
  update: ProjectUpdateWithoutParentProjectDataInput!
  create: ProjectCreateWithoutParentProjectInput!
}

input ProjectWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  repositoryUrl: String
  repositoryUrl_not: String
  repositoryUrl_in: [String!]
  repositoryUrl_not_in: [String!]
  repositoryUrl_lt: String
  repositoryUrl_lte: String
  repositoryUrl_gt: String
  repositoryUrl_gte: String
  repositoryUrl_contains: String
  repositoryUrl_not_contains: String
  repositoryUrl_starts_with: String
  repositoryUrl_not_starts_with: String
  repositoryUrl_ends_with: String
  repositoryUrl_not_ends_with: String
  projectUrl: String
  projectUrl_not: String
  projectUrl_in: [String!]
  projectUrl_not_in: [String!]
  projectUrl_lt: String
  projectUrl_lte: String
  projectUrl_gt: String
  projectUrl_gte: String
  projectUrl_contains: String
  projectUrl_not_contains: String
  projectUrl_starts_with: String
  projectUrl_not_starts_with: String
  projectUrl_ends_with: String
  projectUrl_not_ends_with: String
  createdBy: UserWhereInput
  parentProject: ProjectWhereInput
  subprojects_every: ProjectWhereInput
  subprojects_some: ProjectWhereInput
  subprojects_none: ProjectWhereInput
  AND: [ProjectWhereInput!]
  OR: [ProjectWhereInput!]
  NOT: [ProjectWhereInput!]
}

input ProjectWhereUniqueInput {
  id: ID
}

type Query {
  project(where: ProjectWhereUniqueInput!): Project
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project]!
  projectsConnection(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProjectConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  projects(where: ProjectWhereInput, orderBy: ProjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Project!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  projects: ProjectCreateManyWithoutCreatedByInput
}

input UserCreateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutProjectsInput {
  name: String!
  email: String!
  password: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  projects: ProjectUpdateManyWithoutCreatedByInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneWithoutProjectsInput {
  create: UserCreateWithoutProjectsInput
  update: UserUpdateWithoutProjectsDataInput
  upsert: UserUpsertWithoutProjectsInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutProjectsDataInput {
  name: String
  email: String
  password: String
}

input UserUpsertWithoutProjectsInput {
  update: UserUpdateWithoutProjectsDataInput!
  create: UserCreateWithoutProjectsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  projects_every: ProjectWhereInput
  projects_some: ProjectWhereInput
  projects_none: ProjectWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    