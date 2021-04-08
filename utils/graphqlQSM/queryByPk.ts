import { gql } from "@apollo/client";

export const GET_REKRUTACJA_MERCHANDISER_BY_PK = gql`
  query RekrutacjaMerchById($id: Int!) {
    rekrutacja_merchandiser_by_pk(id: $id) {
      rekrutacja {
        id
        user {
          id
          name
          surname
        }
        data_zgloszenia
        rekrutacja_typ {
          name
        }
        uwagi
        rekrutacja_status {
          id
          status_name
        }
      }
      id
      klient {
        id
        name
        phone
      }
      market {
        id
        city
        name
        post_code
        street
      }
      koordynator_regionalny {
        id
        name
        phone
        email
      }
      praca_detale {
        start_pracy
        wynagrodzenie_miesieczne
        start_pracy
        stawka_godzinowa
        dni_pracy {
          id
          poniedzialek
          wtorek
          sroda
          czwartek
          piatek
          sobota
          niedziela
        }
      }
    }
  }
`;
