import { gql } from "@apollo/client";

export const UpdatePrzegladByPk = gql`
  mutation UpdatePrzegladByPk(
    $id: Int!
    $data: Przeglad_set_input!
    $idPrzegladKosztaDodatkowe: Int!
    $dataPrzegladKosztaDodatkowe: Przeglad_Koszta_Dodatkowe_set_input!
  ) {
    update_Przeglad_by_pk(pk_columns: { id: $id }, _set: $data) {
      id_auto
    }

    update_Przeglad_Koszta_Dodatkowe_by_pk(
      pk_columns: { id: $idPrzegladKosztaDodatkowe }
      _set: $dataPrzegladKosztaDodatkowe
    ) {
      id
    }
  }
`;
