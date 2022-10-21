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