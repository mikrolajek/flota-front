import { Column } from "react-table";
import { TextfieldOneFilter } from "./rekrutacje/merchandiser/filters/TextFieldOneFilter";

export interface IData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  age: number;
  country: string;
  phone: string;
}

//@ts-ignore
export const COLUMNS: Column<IData>[] = [
  {
    Header: "Id",
    Footer: "Id",
    accessor: "id",
    Filter: TextfieldOneFilter,
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
    disableFilters: true,
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
    disableFilters: true,
  },
  {
    Header: "Date of Birth",
    Footer: "Date of Birth",
    accessor: "date_of_birth",
    disableFilters: true,
  },
  {
    Header: "Country",
    Footer: "Country",
    accessor: "country",
    disableFilters: true,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    disableFilters: true,
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
    disableFilters: true,
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
    disableFilters: true,
  },
];
