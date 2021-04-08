import { gql } from "@apollo/client";

export const GetPrzegladyForAuto = gql`
  query GetPrzegladyForAuto($id_auto: Int!) {
    Przeglad(
      where: { id_auto: { _eq: $id_auto } }
      order_by: { Przeglad_OT_Kilometry: { ilosc_kilometrow_w_tysiacach: asc } }
    ) {
      id
      id_auto
      is_wymiana_rozrzadu
      id_przeglad_ot_kilometry
      id_przeglad_koszta_dodatkowe
      data_przegladu
      Przeglad_Koszta_Dodatkowe {
        id
        koszt_klimatyzacja
        koszt_MacPhersona
        koszt_hamulce
        koszt_rozrzad
        koszt_sprzeglo
      }
      Przeglad_OT_Kilometry {
        id
        ilosc_kilometrow_w_tysiacach
      }
    }
  }
`;
