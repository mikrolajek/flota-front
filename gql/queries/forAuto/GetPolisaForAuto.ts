import { gql } from "@apollo/client";

export const GetPolisaForAuto = gql`
  query GetPolisaForAuto($id: Int!) {
    Polisa(where: { id_auto: { _eq: $id } }) {
      id
      id_auto
      ac_oc
      data_rozpoczecia_polisy
      nr_polisy
      ubezpieczyciel
    }
  }
`;
