import { gql } from "@apollo/client";

export const AddGrupaAutKlienta = gql`
  mutation AddGrupaAutKlienta($data: Grupa_Aut_Klienta_insert_input!) {
    insert_Grupa_Aut_Klienta_one(object: $data) {
      id
      id_auto
    }
  }
`;
