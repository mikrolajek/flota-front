import { gql } from "@apollo/client";

export const GetUzytkownikFromHistoriaUzytkownikAutoForAuto = gql`
  query GetUzytkownikFromHistoriaUzytkownikAutoForAuto($id_auto: Int!) {
    Uzytkownik(
      where: { Historia_Uzytkownik_Autos: { id_auto: { _eq: $id_auto } } }
    ) {
      imie
      nazwisko
      id
    }
  }
`;
