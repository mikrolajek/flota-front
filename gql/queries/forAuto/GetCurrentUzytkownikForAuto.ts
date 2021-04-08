import { gql } from "@apollo/client";

export const GetCurrentUzytkownikForAuto = gql`
  query GetCurrentUzytkownikForAuto($id_auto: Int!) {
    Historia_Uzytkownik_Auto(
      where: {
        _and: [
          { id_auto: { _eq: $id_auto } }
          { data_oddania_auta: { _is_null: true } }
        ]
      }
      order_by: { data_dodania_wlasciciela: desc_nulls_last }
      limit: 1
    ) {
      data_dodania_wlasciciela
      data_oddania_auta
      Uzytkownik {
        id
        imie
        nazwisko
        telefon
        pesel
        miasto
        numer_prawa_jazdy
        miasto
        email
      }
    }
  }
`;
