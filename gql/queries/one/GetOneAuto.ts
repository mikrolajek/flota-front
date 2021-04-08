import { gql } from "@apollo/client";

export const GetOneAuto = gql`
  query GetOneAuto($id: Int!) {
    Auto_by_pk(id: $id) {
      id
      is_w_uzyciu
      marka
      model
      numer_rejestracyjny
      numer_vin
      paliwo
      rok_produkcji
      stan_licznika
      gwarancja
      uwagi
    }
    Karta_Orlen(where: { id_auto: { _eq: $id } }) {
      id
      pin
      data_waznosci
    }
    Historia_Uzytkownik_Auto(where: { id_auto: { _eq: $id } }) {
      Uzytkownik {
        nazwisko
        numer_prawa_jazdy
        pesel
        telefon
      }
    }
  }
`;
