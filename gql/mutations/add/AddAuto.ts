import { gql } from "@apollo/client";

export const AddAuto = gql`
  mutation AddAuto($data: Auto_insert_input!) {
    insert_Auto_one(object: $data) {
      id
    }
  }
`;
