import { gql } from "@apollo/client";

export const AddOpona = gql`
  mutation AddOpona($data: Opona_insert_input!) {
    insert_Opona_one(object: $data) {
      id
      id_auto
    }
  }
`;
