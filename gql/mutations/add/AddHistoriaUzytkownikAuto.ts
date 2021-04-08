import { gql } from "@apollo/client";

export const AddHistoriaUzytkownikAuto = gql`
  mutation AddHistoriaUzytkownikAuto(
    $data: Historia_Uzytkownik_Auto_insert_input!
  ) {
    insert_Historia_Uzytkownik_Auto_one(object: $data) {
      id
      id_auto
    }
  }
`;
