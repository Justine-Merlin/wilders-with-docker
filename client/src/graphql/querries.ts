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

export const GET_LANGUAGES = gql`
  query getAllLanguages {
    getAllLanguages {
      id
      label
    }
  }
`;