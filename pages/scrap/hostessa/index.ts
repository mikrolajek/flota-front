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

export interface IDataToSendHostessa {
  wsparcie_rekrutacyjne: boolean;
  id_koordynator_regionalny: number;
  id_market: number;
  id_klient: number;
  data_wykonanie_zlecenia: string;
  is_hostessa: boolean;
  is_tk: boolean;
  rekrutacja: {
    data: {
      id_user: number;
      // # Hostessa
      id_rekrutacja_typ: 3;
      // # Nowa rekrutacja
      id_status: 1;
    };
  };
  praca_detale: {
    data: {
      ilosc_godzin: number;
      stawka_godzinowa: number;
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

export interface IHostessaFlat {
  wsparcie_rekrutacyjne: boolean;
  id_koordynator_regionalny: number;
  id_market: number;
  id_klient: number;
  is_hostessa: boolean;
  is_tk: boolean;
  id_user: number;
  // # Hostessa
  id_rekrutacja_typ: 3;
  // # Nowa rekrutacja
  id_status: 1;
  ilosc_godzin: number;
  data_wykonanie_zlecenia: string;
  stawka_godzinowa: number;
  start_pracy: string;
  poniedzialek: boolean;
  wtorek: boolean;
  sroda: boolean;
  czwartek: boolean;
  piatek: boolean;
  sobota: boolean;
  niedziela: boolean;
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

export const getOptionsMarket = (data: any): IOptionSelect[] => {
  return data.market.map((market: any) => {
    return {
      label: `${market?.name} | ${market?.city} | ${market?.street} | ${market?.post_code} `,
      value: market.id,
    };
  });
};

export const getOptionsKlient = (data: any): IOptionSelect[] => {
  return data.klient.map((item: any) => {
    return {
      label: `${item?.name} | ${item?.phone} | ${item?.id} `,
      value: item.id,
    };
  });
};

export const getOptionsKoordynator = (data: any): IOptionSelect[] => {
  return data.koordynator_regionalny.map((item: any) => {
    return {
      label: `${item?.name} ${item?.surname} | ${item?.phone} | ${item?.email} `,
      value: item.id,
    };
  });
};

export const RedStar = styled.span`
  color: red;
  font-weight: bold;
  &::before {
    content: "* ";
  }
`;

export const getObjectToSend = (data: IHostessaFlat, user_id: number) => {
  const dataToInsert: IDataToSendHostessa = {
    data_wykonanie_zlecenia: data.data_wykonanie_zlecenia,
    id_klient: data.id_klient,
    id_koordynator_regionalny: data.id_koordynator_regionalny,
    id_market: data.id_market,
    is_hostessa: data.is_hostessa,
    is_tk: data.is_tk,
    praca_detale: {
      data: {
        ilosc_godzin: +data.ilosc_godzin,
        start_pracy: data.start_pracy,
        stawka_godzinowa: +data.stawka_godzinowa,
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
        id_rekrutacja_typ: 3,
        id_status: 1,
        id_user: user_id,
      },
    },
    wsparcie_rekrutacyjne: data?.wsparcie_rekrutacyjne,
  };
  return dataToInsert;
};

// const RedStar = () => {};

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;

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
