import { gql } from "@apollo/client";

export const AddPrzeglad = gql`
  mutation AddPrzeglad($data: Przeglad_insert_input!) {
    insert_Przeglad_one(object: $data) {
      id
      id_auto
    }
  }
`;
