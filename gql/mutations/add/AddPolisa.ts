import { gql } from "@apollo/client";

export const AddPolisa = gql`
  mutation AddPolisa($data: Polisa_insert_input!) {
    insert_Polisa_one(object: $data) {
      id
      id_auto
    }
  }
`;
