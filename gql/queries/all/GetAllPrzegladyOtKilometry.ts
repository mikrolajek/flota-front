import { gql } from "@apollo/client";

export const GetAllPrzegladyOtKilometry = gql`
  query GetAllPrzegladyOtKilometry {
    Przeglad_OT_Kilometry(order_by: { ilosc_kilometrow_w_tysiacach: asc }) {
      id
      ilosc_kilometrow_w_tysiacach
    }
  }
`;
