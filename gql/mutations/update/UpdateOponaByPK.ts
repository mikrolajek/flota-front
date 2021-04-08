import { gql } from "@apollo/client";

export const UpdateOponaByPK = gql`
  mutation UpdateOponaByPK($id: Int!, $data: Opona_set_input!) {
    update_Opona_by_pk(pk_columns: { id: $id }, _set: $data) {
      id_auto
    }
  }
`;
