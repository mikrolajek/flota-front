import { gql } from "@apollo/client";

export const UpdateGrupaAutKlientaByPK = gql`
  mutation UpdateGrupaAutKlientaByPK(
    $id: Int!
    $data: Grupa_Aut_Klienta_set_input!
  ) {
    update_Grupa_Aut_Klienta_by_pk(pk_columns: { id: $id }, _set: $data) {
      id_auto
    }
  }
`;
