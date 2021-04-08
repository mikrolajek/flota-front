import { gql } from "@apollo/client";

export const GetAllAutoAndPrzebiegiWithDate = gql`
  query GetAllAutoAndPrzebiegiWithDate($date_from: date!, $date_to: date!) {
    Auto {
      id
      marka
      model
      rok_produkcji
      stan_licznika
      paliwo
      numer_rejestracyjny
      numer_vin
      is_w_uzyciu
      Last_month_Przebiegs_aggregate: Przebiegs_aggregate(
        where: { data_przebiegu: { _lt: $date_from } }
      ) {
        aggregate {
          max {
            przebieg
          }
        }
      }
      Przebiegs_aggregate(
        where: {
          _and: [
            { data_przebiegu: { _gte: $date_from } }
            { data_przebiegu: { _lte: $date_to } }
          ]
        }
      ) {
        aggregate {
          min {
            przebieg
          }
          max {
            przebieg
          }
        }
      }
    }
  }
`;
