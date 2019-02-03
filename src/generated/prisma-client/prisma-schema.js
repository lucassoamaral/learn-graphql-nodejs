module.exports = {
        typeDefs: /* GraphQL */ `type AggregateProject {
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
}

input ProjectUpdateManyMutationInput {
  title: String
  description: String
  repositoryUrl: String
  projectUrl: String
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
  node(id: ID!): Node
}

type Subscription {
  project(where: ProjectSubscriptionWhereInput): ProjectSubscriptionPayload
}
`
      }
    