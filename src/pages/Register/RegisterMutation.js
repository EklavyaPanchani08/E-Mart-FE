import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation CreateUser($input: UserInput) {
  createUser(input: $input) {
    id
    firstName
    lastName
    email
    password
    gender
    isActive
    isVerified
    isApproved
    createdBy
    updatedBy
    createdAt
    updatedAt
  }
}
`