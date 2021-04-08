import { matchSorter } from "match-sorter";
import styled from "styled-components";

export interface IOptionSelect {
  label: string;
  value: string | boolean | any;
  key?: any;
}

// data_wykonanie_zlecenia: "var"
//     rekrutacja: {
//       data: {
//         id_user: 1
//         # Hostessa
//         id_rekrutacja_typ: 3
//         # Nowa rekrutacja
//         id_status: 1
//       }
//     }

export interface IDataToSendBiuro {
  stanowisko: string;
  manager: string;
  miasto: string;
  wojewodztwo: string;
  rekrutacja: {
    data: {
      id_user: number;
      // # biuro
      id_rekrutacja_typ: 4;
      // # Nowa rekrutacja
      id_status: 1;
    };
  };
  praca_detale: {
    data: {
      ilosc_godzin: number;
      stawka_godzinowa: number;
      wynagrodzenie_miesieczne: number;
      start_pracy: string;
      dni_pracy: {
        data: {
          poniedzialek: boolean;
          wtorek: boolean;
          sroda: boolean;
          czwartek: boolean;
          piatek: boolean;
          sobota: boolean;
          niedziela: boolean;
        };
      };
    };
  };
}

export interface IBiuroFlat {
  stanowisko: string;
  manager: string;
  miasto: string;
  wojewodztwo: string;
  id_user: number;
  // # biuro
  id_rekrutacja_typ: 4;
  // # Nowa rekrutacja
  id_status: 1;
  ilosc_godzin: number;
  stawka_godzinowa: number;
  wynagrodzenie_miesieczne: number;
  poniedzialek: boolean;
  wtorek: boolean;
  sroda: boolean;
  czwartek: boolean;
  piatek: boolean;
  sobota: boolean;
  niedziela: boolean;
  start_pracy: string;
}

export const optionsDniPracy: IOptionSelect[] = [
  {
    label: "Poniedziałek",
    key: "poniedzialek",
    value: { poniedzialek: true },
  },
  {
    label: "Wtorek",
    key: "wtorek",
    value: { wtorek: true },
  },
  {
    label: "Środa",
    key: "sroda",
    value: { poniedzialek: true },
  },
  {
    label: "Czwartek",
    key: "czwartek",
    value: { czwartek: true },
  },
  {
    label: "Piatek",
    key: "piatek",
    value: { piatek: true },
  },
  {
    label: "Sobota",
    key: "sobota",
    value: { sobota: true },
  },
  {
    label: "Niedziela",
    key: "niedziela",
    value: { niedziela: true },
  },
];

export const getObjectToSend = (data: IBiuroFlat, user_id: number) => {
  const dataToInsert: IDataToSendBiuro = {
    manager: data.manager,
    miasto: data.miasto,
    stanowisko: data.stanowisko,
    wojewodztwo: data.wojewodztwo,
    praca_detale: {
      data: {
        wynagrodzenie_miesieczne: data.wynagrodzenie_miesieczne,
        ilosc_godzin: data.ilosc_godzin,
        start_pracy: data.start_pracy,
        stawka_godzinowa: data.stawka_godzinowa,
        dni_pracy: {
          data: {
            poniedzialek: data.poniedzialek,
            wtorek: data.wtorek,
            sroda: data.sroda,
            czwartek: data.czwartek,
            piatek: data.piatek,
            sobota: data.sobota,
            niedziela: data.niedziela,
          },
        },
      },
    },
    rekrutacja: {
      data: {
        id_rekrutacja_typ: 4,
        id_status: 1,
        id_user: user_id,
      },
    },
  };
  return dataToInsert;
};

// const RedStar = () => {};

export const getCorrectPopUpValues = (
  options: IOptionSelect[],
  textInput: string,
  optionFromForm: any
): boolean => {
  let filteredValues = matchSorter(options, textInput, {
    keys: ["label"],
  }) as IOptionSelect[];

  let isOptionReturned = filteredValues.some(
    (item) => item?.label == optionFromForm.label
  );
  return isOptionReturned;
};
