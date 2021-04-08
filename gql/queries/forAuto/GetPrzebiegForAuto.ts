import { gql } from "@apollo/client";

export const GetPrzebiegForAuto = gql`
  query GetPrzebiegForAuto($id_auto: Int!) {
    Przebieg(
      where: { id_auto: { _eq: $id_auto } }
      order_by: { data_przebiegu: desc }
    ) {
      id
      przebieg
      data_przebiegu
    }
  }
`;
