import { gql } from "@apollo/client";

export const AddUzytkownik = gql`
  mutation AddUzytkownik($data: Uzytkownik_insert_input!) {
    insert_Uzytkownik_one(object: $data) {
      id
    }
  }
`;
