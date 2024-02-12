import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation MyMutation(
    $name: String!
    $email: String!
    $text: String!
    $id: ID!
  ) {
    createCommentss(
      data: {
        name: $name
        email: $email
        text: $text
        carInfo: { connect: { id: $id } }
      }
    ) {
      id
      name
    }
  }
`;
export { SEND_COMMENT };
