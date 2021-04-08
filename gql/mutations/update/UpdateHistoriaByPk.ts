import { gql } from "@apollo/client";

export const UpdateHistoriaByPk = gql`
  mutation UpdateHistoriaByPk(
    $id: Int!
    $data: Historia_Uzytkownik_Auto_set_input!
  ) {
    update_Historia_Uzytkownik_Auto_by_pk(
      pk_columns: { id: $id }
      _set: $data
    ) {
      id
      id_auto
    }
  }
`;
