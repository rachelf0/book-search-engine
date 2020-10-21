// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`

type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook: (book: BookInput): User
    removeBook: (bookId: String!): User
  }

input BookInput {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

`;

// export the typeDefs
module.exports = typeDefs;