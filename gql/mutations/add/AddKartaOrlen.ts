import { gql } from "@apollo/client";

export const AddKartaOrlen = gql`
  mutation AddKartaOrlen($data: Karta_Orlen_insert_input!) {
    insert_Karta_Orlen_one(object: $data) {
      id
      id_auto
    }
  }
`;
