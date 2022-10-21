import { gql } from "@apollo/client";

export const WILDERS_QUERY = gql`
  {
    getWilders {
    success
    wilders {
      id
      createdDate
      first_name
      last_name
      age
      languages {
        label
      }
    }
  }

  }
`;
export const GET_WILDER_BY_ID = gql`
  query GetWilder($getWilderByIdId: ID!) {
    getWilderById(id: $getWilderByIdId) {
      id
      first_name
      last_name
      age
      languages {
        label
        id
      }
      scores {
        value
        createdDate
        language {
          label
        }
      }
    }
  }
`;

export const GET_LANGUAGES = gql`
  query getAllLanguages {
    getAllLanguages {
      id
      label
    }
  }
`;