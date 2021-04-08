import { gql } from "@apollo/client";

export const UpdatePrzebiegiByPK = gql`
  mutation UpdatePrzebiegiByPK($id: Int!, $data: Przebieg_set_input!) {
    update_Przebieg_by_pk(pk_columns: { id: $id }, _set: $data) {
      id_auto
    }
  }
`;
