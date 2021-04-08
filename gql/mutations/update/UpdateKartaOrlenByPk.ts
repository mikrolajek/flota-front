import { gql } from "@apollo/client";

export const UpdateKartaOrlenByPk = gql`
  mutation UpdateKartaOrlenByPk($id: Int!, $data: Karta_Orlen_set_input!) {
    update_Karta_Orlen_by_pk(pk_columns: { id: $id }, _set: $data) {
      id_auto
    }
  }
`;
