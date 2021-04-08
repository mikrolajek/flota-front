import { CardPanel } from "@COMPONENTS/styledComponents/components";
import TextfieldOneFilter from "@COMPONENTS/Tables/rekrutacje/merchandiser/filters/TextFieldOneFilter";
import { WiecejLink } from "@COMPONENTS/Tables/rekrutacje/merchandiser/WiecejLink";
import { TableUniversal } from "@COMPONENTS/Tables/universal/TableUniversal";
import LayoutM from "@COMPONENTS/universal-components/LayoutM";
import { LoaderInDash } from "@COMPONENTS/universal-components/Loaders";
import { SelectedPanelField } from "@UTILS/selectedPanel";
import Title from "antd/lib/typography/Title";
import { Uzytkownik, useGetAllUzytkownikQuery } from "generated/graphql";
import React from "react";
import { Column } from "react-table";

export const COLUMNS: Column<Uzytkownik>[] = [
  {
    Header: "Id",
    accessor: "id",
    Filter: TextfieldOneFilter,
  },
  {
    Header: "Imię",
    accessor: "imie",
    disableFilters: true,
  },
  {
    Header: "Nazwisko",
    accessor: "nazwisko",
    disableFilters: true,
  },
  {
    Header: "Pesel",
    accessor: "pesel",
    disableFilters: true,
  },
  {
    Header: "Telefon",
    accessor: "telefon",
    disableFilters: true,
  },

  {
    Header: "Nr Prawa Jazdy",
    accessor: "numer_prawa_jazdy",
    disableFilters: true,
  },

  {
    Header: "Miasto",
    accessor: "miasto",
    disableFilters: true,
  },

  {
    Header: "Zasób",
    accessor: "id",
    id: "idLink",
    Cell: (cell) => {
      return <WiecejLink linkPath={`/lista/uzytkownik/`} cellInfo={cell} />;
    },
    disableFilters: true,
  },
];

const Index = () => {
  const { data, loading, error } = useGetAllUzytkownikQuery();

  if (loading) {
    return <LoaderInDash selectedField={SelectedPanelField.LISTA_UZYTKOWNIK} />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      <LayoutM
        selectedField={SelectedPanelField.LISTA_UZYTKOWNIK}
        flexCenter={true}>
        <CardPanel>
          <Title level={3}>Użytkownicy</Title>
          <TableUniversal data={data?.Uzytkownik} columns={COLUMNS} />
        </CardPanel>
      </LayoutM>
    </>
  );
};

export default Index;
