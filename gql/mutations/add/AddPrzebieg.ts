import { gql } from "@apollo/client";

export const AddPrzebieg = gql`
  mutation AddPrzebieg($data: Przebieg_insert_input!) {
    insert_Przebieg_one(object: $data) {
      id
      id_auto
    }
  }
`;
