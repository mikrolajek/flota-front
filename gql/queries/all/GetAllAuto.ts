import { gql } from "@apollo/client";

export const GetAllAuto = gql`
  query GetAllAuto {
    Auto {
      id
      marka
      model
      rok_produkcji
      stan_licznika
      paliwo
      is_w_uzyciu
      numer_rejestracyjny
      numer_vin
    }
  }
`;
