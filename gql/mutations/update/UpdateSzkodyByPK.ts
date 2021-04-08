import { gql } from "@apollo/client";

export const UpdateSzkodyByPK = gql`
  mutation UpdateSzkodyByPK($id: Int!, $data: Szkoda_set_input!) {
    update_Szkoda_by_pk(pk_columns: { id: $id }, _set: $data) {
      id_auto
    }
  }
`;
