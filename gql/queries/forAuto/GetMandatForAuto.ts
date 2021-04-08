import { gql } from "@apollo/client";

export const GetMandatForAuto = gql`
  query GetMandatForAuto($id_auto: Int!) {
    Mandat(where: { id_auto: { _eq: $id_auto } }) {
      id
      id_uzytkownik
      id_auto
      data_pisma
      data_zdarzenia
      data_otrzymania
      data_odpowiedzi
      nr_sprawy
      nadawca
      obciazenie_za_mandat
      platnosc
      wysokosc_mandatu
      dzialanie
      Uzytkownik {
        imie
        nazwisko
      }
    }
  }
`;
