import { gql } from "@apollo/client";

export const GetAllTypyOpon = gql`
  query GetAllTypyOpon {
    Typy_Opon {
      id
      nazwa_typu
    }
  }
`;
