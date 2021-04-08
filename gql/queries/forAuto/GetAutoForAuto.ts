import { gql } from "@apollo/client";

export const GetAutoForAuto = gql`
  query GetAutoForAuto($id: Int!) {
    Auto_by_pk(id: $id) {
      gwarancja
      id
      paliwo
      rok_produkcji
      marka
      model
      numer_vin
      numer_rejestracyjny
      uwagi
      is_w_uzyciu
    }
  }
`;
