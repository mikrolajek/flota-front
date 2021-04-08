import { gql } from "@apollo/client";

export const INSERT_REKRUTACJA_INNE = gql`
  mutation InsertInne($dataToInsert: rekrutacja_inne_insert_input!) {
    insert_rekrutacja_inne_one(object: $dataToInsert) {
      id
    }
  }
`;

export const INSERT_REKRUTACJA_MERCHANDISER_MOBILNY = gql`
  mutation InsertMerchandiserMobilny(
    $dataToInsert: rekrutacja_merchandiser_mobilny_ph_insert_input!
  ) {
    insert_rekrutacja_merchandiser_mobilny_ph_one(object: $dataToInsert) {
      id
    }
  }
`;

export const INSERT_REKRUTACJA_BIURO = gql`
  mutation InsertBiuro($dataToInsert: rekrutacja_biuro_insert_input!) {
    insert_rekrutacja_biuro_one(object: $dataToInsert) {
      id
    }
  }
`;

//$dataToInsert
export const INSERT_REKRUTACJA_MERCHANDISER = gql`
  mutation InsertMerchandiser(
    $dataToInsert: [rekrutacja_merchandiser_insert_input!]!
  ) {
    insert_rekrutacja_merchandiser(objects: $dataToInsert) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const INSERT_REKRUTACJA_HOSTESSA_TK = gql`
  mutation InsertHostessa($dataToInsert: rekrutacja_hostessa_tk_insert_input!) {
    insert_rekrutacja_hostessa_tk_one(object: $dataToInsert) {
      id
    }
  }
`;

// export const INSERT_REKRUTACJA_HOSTESSA_TK_template = `
// mutation {
//   insert_rekrutacja_hostessa_tk (objects: {
//     data_wykonanie_zlecenia: "var"
//     id_klient: 1
//     id_market: 1
//     id_koordynator_regionalny: 1
//      is_hostessa: true
//     wsparcie_rekrutacyjne: true
//     rekrutacja: {
//       data: {
//         id_user: 1
//         # Hostessa
//         id_rekrutacja_typ: 3
//         # Nowa rekrutacja
//         id_status: 1
//       }
//     }
//   })
// }`;

//ignore
// export const ADD_REKRUTACJA_MERCHANDISER = gql`
//   mutation {
//     insert_rekrutacja_merchandiser(
//       objects: {
//         wsparcie_rekrutacyjne: false
//         id_koordynator_regionalny: 1
//         praca_detale: {
//           data: {
//             ilosc_godzin: 12
//             stawka_godzinowa: 18
//             start_pracy: "2021-01-10"
//             dni_pracy: {
//               data: {
//                 poniedzialek: true
//                 wtorek: false
//                 sroda: true
//                 czwartek: false
//                 piatek: false
//                 sobota: false
//                 niedziela: true
//               }
//             }
//           }
//         }
//         market: {
//           data: {
//             city: "Kraków"
//             name: "Zenek"
//             post_code: "12345"
//             street: "wiosenna 123"
//           }
//         }
//         rekrutacja: { data: { id_user: 1, id_rekrutacja_typ: 1, id_status: 1 } }
//         klient: { data: { name: "Adam", phone: "123" } }
//       }
//     ) {
//       affected_rows
//       returning {
//         klient {
//           name
//           phone
//         }
//         rekrutacja {
//           id
//           user {
//             name
//           }
//         }
//       }
//     }
//   }
// `;

// export const ADD_BRANCH = gql`
//   mutation insert_branch_one($location: location_insert_input!) {
//     insert_location_one(object: $location) {
//       id
//       address
//       id_company
//     }
//   }
// `;

// export const ADD_PRODUCT = gql`
//   mutation insert_product_one($product: product_insert_input!) {
//     insert_product_one(object: $product) {
//       id
//       name
//     }
//   }
// `;

// export const ADD_COMPANY = gql`
//   mutation insert_company_one($company: company_insert_input!) {
//     insert_company_one(object: $company) {
//       id
//       name
//     }
//   }
// `;

// export const UPDATE_LINK_URL = gql`
//   mutation UpdateLink($id: Int!, $url: String!) {
//     update_link_by_pk(pk_columns: { id: $id }, _set: { url: $url }) {
//       id
//       url
//     }
//   }
// `;
export const ADD_REKRUTACJA = gql`
  mutation {
    insert_rekrutacja(
      objects: [
        {
          id_status: 1
          id_rekrutacja_typ: 1
          id_user: 1
          rekrutacja_merchandisers: {
            data: {
              id_klient: 1
              id_koordynator_regionalny: 1
              id_market: 1
              wsparcie_rekrutacyjne: false
              praca_detale: {
                data: {
                  dni_pracy: {
                    data: {
                      poniedzialek: true
                      wtorek: false
                      sroda: true
                      czwartek: true
                      piatek: true
                      sobota: true
                      niedziela: false
                    }
                  }
                }
              }
            }
          }
        }
      ]
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;
