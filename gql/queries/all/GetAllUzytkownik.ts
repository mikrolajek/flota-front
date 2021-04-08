import { gql } from "@apollo/client";

export const GetAllUzytkownik = gql`
  query GetAllUzytkownik {
    Uzytkownik {
      imie
      nazwisko
      miasto
      pesel
      telefon
      numer_prawa_jazdy
      id
      email
    }
  }
`;

// export const getAllUzytkownicy = gql`
//   query getAllUzytkownicy {
//     Uzytkownik {
//       imie
//       nazwisko
//       miasto
//       pesel
//       telefon
//       numer_prawa_jazdy
//       id
//     }
//   }
// `;
