import { gql } from "apollo-server-core";

const typeDefs = gql`
  type SearchedUser {
    id: String
    username: String
    image: String
  }

  type Query {
    searchUsers(username: String): [SearchedUser]
  }

  type Mutation {
    createUsername(username: String): createUsernameResponse
  }

  type createUsernameResponse {
    success: Boolean
    error: String
  }
`;

export default typeDefs;
