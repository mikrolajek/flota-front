import { gql } from "@apollo/client";

export const UpdateAutoByPk = gql`
  mutation UpdateAutoByPk($id: Int!, $data: Auto_set_input!) {
    update_Auto_by_pk(pk_columns: { id: $id }, _set: $data) {
      id
    }
  }
`;
