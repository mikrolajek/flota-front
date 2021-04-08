import { gql } from "@apollo/client";

export const GetSzkodaForAuto = gql`
  query GetSzkodaForAuto($id_auto: Int!) {
    Szkoda(where: { id_auto: { _eq: $id_auto } }) {
      id
      id_auto
      id_status_szkody
      id_uzytkownik
      Status_Szkody {
        nazwa_statusu
        id
      }
      Uzytkownik {
        imie
        nazwisko
      }
      opis_szkody
      uszkodzenia
      adres
    }
  }
`;
