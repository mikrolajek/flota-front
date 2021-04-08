import { gql } from "@apollo/client";

export const GetAllKlient = gql`
  query GetAllKlient {
    Klient {
      id
      kontakt
      nazwa
    }
  }
`;
