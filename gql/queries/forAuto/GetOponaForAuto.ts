import { gql } from "@apollo/client";

export const GetOponaForAuto = gql`
  query GetOponaForAuto($id_auto: Int!) {
    Opona(where: { id_auto: { _eq: $id_auto } }) {
      id
      id_auto
      data_zakupu
      detale
      firma
      id_typy_opon
      koszt
      rozmiar
      Typy_Opon {
        nazwa_typu
        id
      }
    }
  }
`;
