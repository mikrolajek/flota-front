import { gql } from "@apollo/client";

export const GetKartaOrlenForAuto = gql`
  query GetKartaOrlenForAuto($id: Int!) {
    Karta_Orlen(where: { id_auto: { _eq: $id } }) {
      id
      pin
      data_waznosci
    }
  }
`;
