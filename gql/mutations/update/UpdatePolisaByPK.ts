import { gql } from "@apollo/client";

export const UpdatePolisaByPK = gql`
  mutation UpdatePolisaByPK($id: Int!, $data: Polisa_set_input!) {
    update_Polisa_by_pk(pk_columns: { id: $id }, _set: $data) {
      id_auto
    }
  }
`;
