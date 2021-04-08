import dayjs from "dayjs";
import { Column } from "react-table";
import TextfieldOneFilter from "./filters/TextFieldOneFilter";
import { WiecejLink } from "./WiecejLink";

//@ts-ignore
export const COLUMNS: Column[] = [
  {
    Header: "Id",
    accessor: "id",
    Filter: TextfieldOneFilter,
  },
  {
    Header: "Status",
    accessor: "status.name",
    disableFilters: true,
  },
  {
    Header: "Rekruter",
    accessor: (row: any) => `${row.user.name} ${row.user.surname}`,
    disableFilters: true,
  },
  {
    Header: "Data zgłoszenia",
    accessor: (row: any) => dayjs(row.data_zgloszenia).format("DD/MM/YYYY"),
    disableFilters: true,
  },
  {
    Header: "Klient",
    accessor: "rekrutacja_merchandisers[0].klient.name",
    disableFilters: true,
  },
  {
    Header: "Koordynator",
    accessor: (row: any) =>
      `${row.rekrutacja_merchandisers[0].koordynator_regionalny.name} ${row.rekrutacja_merchandisers[0].koordynator_regionalny.surname}`,
    disableFilters: true,
  },
  {
    Header: "Zasób",
    accessor: "rekrutacja_merchandisers[0].id",
    Cell: WiecejLink,
    disableFilters: true,
  },
  //   {
  //     Header: "Date of Birth",
  //     accessor: "date_of_birth",
  //     disableFilters: true,
  //   },
  //   {
  //     Header: "Country",
  //     accessor: "country",
  //     disableFilters: true,
  //   },
  //   {
  //     Header: "Phone",
  //     accessor: "phone",
  //     disableFilters: true,
  //   },
  //   {
  //     Header: "Email",
  //     accessor: "email",
  //     disableFilters: true,
  //   },
  //   {
  //     Header: "Age",
  //     accessor: "age",
  //     disableFilters: true,
  //   },
];
