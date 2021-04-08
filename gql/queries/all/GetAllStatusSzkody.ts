import { gql } from "@apollo/client";

export const GetAllStatusSzkody = gql`
  query GetAllStatusSzkody {
    Status_Szkody {
      id
      nazwa_statusu
    }
  }
`;
