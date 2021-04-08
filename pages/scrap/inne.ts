import { matchSorter } from "match-sorter";
import styled from "styled-components";

export interface IOptionSelect {
  label: string;
  value: string | boolean | any;
  key?: any;
}

export const getObjectToSend = (data: IDataToSendInneFlat, user_id: number) => {
  const dataToInsert: dataToSendInne = {
    miasto: data.miasto,
    manager: data.manager,
    stanowisko: data.stanowisko,
    wsparcie_rekrutacyjne: data.wsparcie_rekrutacyjne,
    wojewodztwo: data.wojewodztwo,
    id_klient: data.id_klient,
    id_koordynator_regionalny: data.id_koordynator_regionalny,
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
        id_rekrutacja_typ: 5,
        id_status: 1,
        id_user: user_id,
      },
    },
  };
  return dataToInsert;
};

export interface dataToSendInne {
  miasto: string;
  wojewodztwo: string;
  id_koordynator_regionalny: number;
  id_klient: number;
  wsparcie_rekrutacyjne: boolean;
  manager: string;
  stanowisko: string;
  rekrutacja: {
    data: {
      id_user: number;
      //typ to merchandiser
      id_rekrutacja_typ: 5;
      //nowa
      id_status: 1;
    };
  };
  praca_detale: {
    data: {
      ilosc_godzin: number;
      wynagrodzenie_miesieczne: number;
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

export interface IDataToSendInneFlat {
  id_koordynator_regionalny: number;
  id_market: number;
  id_klient: number;
  wsparcie_rekrutacyjne: boolean;
  manager: string;
  stanowisko: string;
  id_user: number;
  miasto: string;
  wojewodztwo: string;
  //typ to merchandiser mobilny
  id_rekrutacja_typ: 5;
  //nowa
  id_status: 1;
  ilosc_godzin: number;
  stawka_godzinowa: number;
  start_pracy: string;
  poniedzialek: boolean;
  wtorek: boolean;
  sroda: boolean;
  czwartek: boolean;
  piatek: boolean;
  sobota: boolean;
  niedziela: boolean;
  wynagrodzenie_miesieczne: number;
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
