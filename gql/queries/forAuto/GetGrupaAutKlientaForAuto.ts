import { gql } from "@apollo/client";

export const GetGrupaAutKlientaForAuto = gql`
  query GetGrupaAutKlientaForAuto($id_auto: Int!) {
    Grupa_Aut_Klienta(where: { id_auto: { _eq: $id_auto } }) {
      id
      id_auto
      id_klient
      created_at
      Auto {
        id
      }
      Klient {
        id
        nazwa
        kontakt
      }
    }
  }
`;
