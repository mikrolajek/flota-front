import { gql } from "@apollo/client";

export const AddSzkoda = gql`
  mutation AddSzkoda($data: Szkoda_insert_input!) {
    insert_Szkoda_one(object: $data) {
      id
      id_auto
    }
  }
`;
