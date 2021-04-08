import { gql } from "@apollo/client";

export const GetOneUzytkownik = gql`
  query GetOneUzytkownik($id: Int!) {
    Uzytkownik_by_pk(id: $id) {
      id
      imie
      nazwisko
      numer_prawa_jazdy
      pesel
      telefon
      email
    }
  }
`;
