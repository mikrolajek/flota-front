import { gql } from "@apollo/client";

export const AddMandat = gql`
  mutation AddMandat($data: Mandat_insert_input!) {
    insert_Mandat_one(object: $data) {
      id
      id_auto
    }
  }
`;
