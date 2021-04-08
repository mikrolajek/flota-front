import { gql } from "@apollo/client";

export const UpdateMandatByPK = gql`
  mutation UpdateMandatByPK($id: Int!, $data: Mandat_set_input!) {
    update_Mandat_by_pk(pk_columns: { id: $id }, _set: $data) {
      id_auto
    }
  }
`;
