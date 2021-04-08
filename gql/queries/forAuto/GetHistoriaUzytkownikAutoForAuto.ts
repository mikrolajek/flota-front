import { gql } from "@apollo/client";

export const GetHistoriaUzytkownikAutoForAuto = gql`
  query GetHistoriaUzytkownikAutoForAuto($id_auto: Int!) {
    Historia_Uzytkownik_Auto(where: { id_auto: { _eq: $id_auto } }) {
      id
      id_auto
      id_uzytkownik
      Uzytkownik {
        id
        imie
        nazwisko
        miasto
      }
      data_dodania_wlasciciela
      data_oddania_auta
    }
  }
`;
