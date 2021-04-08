import { TableUniversal } from "@COMPONENTS/Tables/universal/TableUniversal";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import { Button, Card, Drawer } from "antd";
import Title from "antd/lib/typography/Title";
import {
  Mandat_Insert_Input,
  Mandat,
  Uzytkownik,
  AddMandatMutationVariables,
  useGetMandatForAutoQuery,
  useAddMandatMutation,
  useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery,
} from "generated/graphql";
import React, { FC, useState } from "react";
import { Column } from "react-table";
import { PlusCircleFilled } from "@ant-design/icons";
import AddButton from "@COMPONENTS/universal-components/AddButton";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  DateField,
  NumberField,
  SelectField,
  TextField,
} from "@COMPONENTS/universal-components/Forms";
import { IPropertiesFlatter } from "@UTILS/IPolaFormularza";
import dayjs from "dayjs";
import { IGetOptions } from "@UTILS/IOptionSelect";
import { EditMandatyComponent } from "../edits";

export const COLUMNS: Column<Mandat>[] = [
  {
    Header: "D. odpowiedzi",
    accessor: (row) => row.data_odpowiedzi,
    disableFilters: true,
  },
  {
    Header: "D. otrzymania",
    accessor: (row) => row.data_otrzymania,
    disableFilters: true,
  },
  {
    Header: "D. zdarzenia",
    accessor: (row) => row.data_zdarzenia,
    disableFilters: true,
  },
  {
    Header: "D. pisma",
    accessor: (row) => row.data_pisma,
    disableFilters: true,
  },
  {
    Header: "Kierowca",
    accessor: (row) => `${row.Uzytkownik.imie} ${row.Uzytkownik.nazwisko}`,
    disableFilters: true,
  },
  {
    Header: "Obciążenie",
    accessor: (row) => row.obciazenie_za_mandat,
    disableFilters: true,
  },
  {
    Header: "Nr. sprawy",
    accessor: (row) => row.nr_sprawy,
    disableFilters: true,
  },
  {
    Header: "Wys. mandatu",
    accessor: (row) => row.wysokosc_mandatu,
    disableFilters: true,
  },
  {
    Header: "Działanie",
    accessor: (row) => row.dzialanie,
    disableFilters: true,
  },
  {
    Header: "Nadawca",
    accessor: (row) => row.nadawca,
    disableFilters: true,
  },
  {
    Header: "Płatność",
    accessor: (row) => row.platnosc,
    disableFilters: true,
  },
  {
    Header: "Edytuj",
    accessor: "id",
    id: "edytuj",
    Cell: (cell) => {
      return <EditMandatyComponent cell={cell} />;
    },
    disableFilters: true,
  },
  // {
  //   Header: "Rozrząd",
  //   accessor: (row) => row.Przeglad_Koszta_Dodatkowe.koszt_rozrzad,
  //   disableFilters: true,
  // },
  // {
  //   Header: "Sprzęgło",
  //   accessor: (row) => row.Przeglad_Koszta_Dodatkowe.koszt_sprzeglo,
  //   disableFilters: true,
  // },
  // {
  //   Header: "Data przeglądu",
  //   accessor: (row) => row.data_przegladu,
  //   disableFilters: true,
  // },
  // {
  //   Header: "Wymiana rozrządu",
  //   accessor: (row) => boolPonglishToString(row.is_wymiana_rozrzadu),
  //   disableFilters: true,
  // },
  // {
  //   Header: "Edytuj",
  //   accessor: "id",
  //   id: "edytuj",
  //   Cell: (cell) => {
  //     return <EditPrzegladyComponent cell={cell} />;
  //   },
  //   disableFilters: true,
  // },
];

interface IProps {
  idAuto: number;
}

const Index: FC<IProps> = ({ idAuto }) => {
  const { data, loading, error } = useGetMandatForAutoQuery({
    variables: { id_auto: idAuto },
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  if (loading) {
    return <LoaderNoDash />;
  }

  if (error) {
    console.log(error);
  }

  return (
    <>
      {/* <CardPanel> */}
      <Card
        bodyStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        headStyle={{ fontSize: "1.5rem" }}
        style={{ fontSize: 16, maxWidth: "95vw" }}
        title={"Mandaty"}
        extra={<AddButton onClick={toggleDrawer} />}>
        {data?.Mandat.length == 0 ? (
          <h1>Brak wpisów</h1>
        ) : (
          <div style={{ maxWidth: "94vw", overflowX: "auto" }}>
            <TableUniversal data={data?.Mandat} columns={COLUMNS} />
          </div>
        )}
      </Card>
      <Drawer visible={isDrawerOpen} onClose={toggleDrawer}>
        <Title level={4}>Dodaj mandat</Title>
        <AddComponent id_auto={idAuto} />
      </Drawer>
    </>
  );
};

export default Index;

const AddComponent = ({ id_auto }: Mandat_Insert_Input) => {
  const [add] = useAddMandatMutation();
  const router = useRouter();

  const {
    data,
    loading,
  } = useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery({
    variables: { id_auto: id_auto! },
  });

  const {
    control,
    handleSubmit,
    register,
  } = useForm<AddMandatMutationVariables>();

  const submitHandler = async (data: AddMandatMutationVariables) => {
    console.log(data);
    const { data: dataReturned } = await add({
      variables: { data: { ...data.data } },
    });
    router.push(`/lista/auto/${dataReturned?.insert_Mandat_one?.id_auto}`);
  };

  if (loading) {
    return <LoaderNoDash />;
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        {/* <SelectField
          control={control}
          name={pola}
          placeholder={"Podaj ilość kilometrów przeglądu"}
          tytul={"Km przeglądu"}
          required
          options={getOptionsPrzegladOtKilometry(data?.Przeglad_OT_Kilometry!)}
        /> */}

        <DateField
          name={polaFormularza.data.data_pisma as string}
          placeholder={"Podaj datę pisma"}
          control={control}
          tytul={"Data pisma"}
          defaultValue={dayjs().format("YYYY-MM-DD")}
          required={true}
        />
        <DateField
          name={polaFormularza.data.data_zdarzenia as string}
          placeholder={"Podaj datę zdarzenia"}
          control={control}
          tytul={"Data zdarzenia"}
          defaultValue={dayjs().format("YYYY-MM-DD")}
          required={true}
        />
        <DateField
          name={polaFormularza.data.data_otrzymania as string}
          placeholder={"Podaj datę otrzymania"}
          control={control}
          tytul={"Data otrzymania"}
          defaultValue={dayjs().format("YYYY-MM-DD")}
          required={true}
        />
        <DateField
          name={polaFormularza.data.data_odpowiedzi as string}
          placeholder={"Podaj datę odpowiedzi"}
          control={control}
          tytul={"Data odpowiedzi"}
          defaultValue={dayjs().format("YYYY-MM-DD")}
          required={false}
        />

        <NumberField
          control={control}
          name={polaFormularza.data.platnosc!}
          tytul={"Płatność"}
          defaultValue={0}
          required
          placeholder={"Podaj koszt płatności"}
        />

        <NumberField
          control={control}
          name={polaFormularza.data.wysokosc_mandatu!}
          tytul={"Wysokość mandatu"}
          defaultValue={0}
          required
          placeholder={"Podaj wysokość mandatu"}
        />

        <NumberField
          control={control}
          name={polaFormularza.data.obciazenie_za_mandat!}
          tytul={"Obciążenie za mandat"}
          defaultValue={0}
          required
          placeholder={"Podaj obciążenie za mandat"}
        />

        <TextField
          control={control}
          name={polaFormularza.data.nadawca!}
          tytul={"Nadawca"}
          defaultValue={0}
          required
          placeholder={"Podaj nadawcę"}
        />

        <TextField
          control={control}
          name={polaFormularza.data.nr_sprawy!}
          tytul={"Numer sprawy"}
          defaultValue={0}
          required
          placeholder={"Podaj numer sprawy"}
        />

        <TextField
          control={control}
          name={polaFormularza.data.dzialanie!}
          tytul={"Działanie"}
          defaultValue={0}
          required
          placeholder={"Podaj działanie"}
        />

        <SelectField
          control={control}
          name={polaFormularza.data.id_uzytkownik!}
          placeholder={"Wybierz kierowce"}
          tytul={"Kierowca"}
          required
          options={getOptionsUzytkownik(data?.Uzytkownik!)}
        />

        <input
          name={polaFormularza.data.id_auto}
          ref={register({ valueAsNumber: true })}
          value={id_auto}
          onChange={() => {}}
          hidden={true}
          type={"number"}
        />

        <Button
          icon={<PlusCircleFilled />}
          type="primary"
          htmlType={"submit"}
          size="large">
          Dodaj
        </Button>
      </form>
    </>
  );
};

const polaFormularza: IPropertiesFlatter<AddMandatMutationVariables> = {
  data: {
    data_odpowiedzi: "data.data_odpowiedzi",
    data_otrzymania: "data.data_otrzymania",
    data_zdarzenia: "data.data_zdarzenia",
    data_pisma: "data.data_pisma",
    nadawca: "data.nadawca",
    id_uzytkownik: "data.id_uzytkownik",
    nr_sprawy: "data.nr_sprawy",
    platnosc: "data.platnosc",
    obciazenie_za_mandat: "data.obciazenie_za_mandat",
    wysokosc_mandatu: "data.wysokosc_mandatu",
    id_auto: "data.id_auto",
    dzialanie: "data.dzialanie",
  },
};

const getOptionsUzytkownik: IGetOptions<Uzytkownik> = (data) => {
  return data.map((item) => {
    return {
      label: `${item?.imie} ${item?.nazwisko}`,
      value: item?.id,
    };
  });
};
