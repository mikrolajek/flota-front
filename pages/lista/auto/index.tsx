import { CardPanel } from "@COMPONENTS/styledComponents/components";
import TextfieldOneFilter from "@COMPONENTS/Tables/rekrutacje/merchandiser/filters/TextFieldOneFilter";
import { WiecejLink } from "@COMPONENTS/Tables/rekrutacje/merchandiser/WiecejLink";
import { TableUniversal } from "@COMPONENTS/Tables/universal/TableUniversal";
import LayoutM from "@COMPONENTS/universal-components/LayoutM";
import { LoaderInDash } from "@COMPONENTS/universal-components/Loaders";
import boolPonglishToString from "@UTILS/boolPonglishToString";
import { SelectedPanelField } from "@UTILS/selectedPanel";
import Title from "antd/lib/typography/Title";
import dayjs from "dayjs";
import {
  GetAllAutoAndPrzebiegiWithDateQuery,
  useGetAllAutoAndPrzebiegiWithDateQuery,
} from "generated/graphql";
import React, { useMemo } from "react";
import { Column } from "react-table";

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;

const getPrzebieg: IGetCurrentPrzebieg = (
  maxCurrentMonth,
  minCurrentMonth,
  maxPast
) => {
  if (minCurrentMonth === maxCurrentMonth) {
    if (maxCurrentMonth > 0) {
      return maxCurrentMonth - maxPast;
    }
  }

  if (minCurrentMonth > 0 && maxCurrentMonth > 0) {
    return maxCurrentMonth - minCurrentMonth;
  }
  return 0;
};

type IGetCurrentPrzebieg = (
  maxCurrentMonth: number,
  minCurrentMonth: number,
  maxPast: number
) => number;

export const COLUMNS: Column<
  ArrayElement<GetAllAutoAndPrzebiegiWithDateQuery["Auto"]>
>[] = [
  {
    Header: "Id",
    accessor: "id",
    Filter: TextfieldOneFilter,
  },
  {
    Header: "Nr. Rejestracyjny",
    accessor: "numer_rejestracyjny",
    disableFilters: true,
  },
  {
    Header: "Km w tym miesiacu",
    id: "km",
    accessor: (row) => {
      const { Przebiegs_aggregate, Last_month_Przebiegs_aggregate } = row;

      const maxCurrentMonth =
        Przebiegs_aggregate?.aggregate?.max?.przebieg ?? 0;
      const minCurrentMonth =
        Przebiegs_aggregate?.aggregate?.min?.przebieg ?? 0;
      const maxPast =
        Last_month_Przebiegs_aggregate?.aggregate?.max?.przebieg ?? 0;

      return getPrzebieg(maxCurrentMonth, minCurrentMonth, maxPast);
    },
    Cell: ({ value }: any) => {
      const color = value > 15000 ? "red" : value > 10000 ? "orange" : "green";
      return <span style={{ color: color }}>{value}</span>;
    },
    disableFilters: true,
  },
  {
    Header: "Nr. vin",
    accessor: "numer_vin",
    disableFilters: true,
  },
  {
    Header: "Paliwo",
    accessor: "paliwo",
    disableFilters: true,
  },
  {
    Header: "Rok produkcji",
    accessor: "rok_produkcji",
    disableFilters: true,
  },

  {
    Header: "Model",
    accessor: "model",
    disableFilters: true,
  },

  {
    Header: "Marka",
    accessor: "marka",
    disableFilters: true,
  },

  {
    Header: "Obecnie w ruchu",
    accessor: (dane) => boolPonglishToString(dane.is_w_uzyciu),
    disableFilters: true,
  },

  {
    Header: "Zasób",
    accessor: "id",
    id: "idLink",
    Cell: (cell) => {
      return <WiecejLink linkPath={`/lista/auto/`} cellInfo={cell} />;
    },
    disableFilters: true,
  },
];

const Index = () => {
  const date_from = useMemo(
    () => dayjs().startOf("month").format(`YYYY-MM-DD`),
    []
  );

  const date_to = useMemo(
    () => dayjs().endOf("month").format(`YYYY-MM-DD`),
    []
  );

  const { data, loading, error } = useGetAllAutoAndPrzebiegiWithDateQuery({
    variables: {
      date_from,
      date_to,
    },
  });

  // const { data, loading, error } = useGetAllAutoQuery();

  if (loading) {
    return <LoaderInDash selectedField={SelectedPanelField.LISTA_AUTO} />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <LayoutM selectedField={SelectedPanelField.LISTA_AUTO} flexCenter={true}>
        <CardPanel>
          <Title level={3}>Auta</Title>
          <TableUniversal data={data?.Auto} columns={COLUMNS} />
        </CardPanel>
      </LayoutM>
    </>
  );
};

export default Index;
// {
//   Header: "Rekruter",
//   accessor: (row: any) => `${row.user.name} ${row.user.surname}`,
//   disableFilters: true,
// },
// {
//   Header: "Data zgłoszenia",
//   accessor: (row: any) => dayjs(row.data_zgloszenia).format("DD/MM/YYYY"),
//   disableFilters: true,
// },
// {
//   Header: "Klient",
//   accessor: "rekrutacja_merchandisers[0].klient.name",
//   disableFilters: true,
// },
// {
//   Header: "Koordynator",
//   accessor: (row: any) =>
//     `${row.rekrutacja_merchandisers[0].koordynator_regionalny.name} ${row.rekrutacja_merchandisers[0].koordynator_regionalny.surname}`,
//   disableFilters: true,
// },
// {
//   Header: "Zasób",
//   accessor: "rekrutacja_merchandisers[0].id",
//   Cell: WiecejLink,
//   disableFilters: true,
// },
