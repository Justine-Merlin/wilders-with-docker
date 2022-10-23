import { gql } from "@apollo/client";

export const NEW_WILDER = gql`
  mutation AddNewWilder($newWilder: NewOrUpdateWilderInput!) {
    createNewWilder(newWilder: $newWilder) {
      id
      createdDate
      first_name
      last_name
      age
      languages {
        id
        label
      }
    }
  }
`;

export const NEW_SCORE_MUTATION = gql`
  mutation AddNewScore($newScore: NewOrUpdateInput!) {
    registerNewScore(newScore: $newScore) {
      id
      value
    }
  }
`;

export const DELETE_WILDER_MUTATION = gql`
  mutation DeleteWilder($deleteWilderId: ID!) {
    deleteWilder(id: $deleteWilderId)
  }
`;