import { TableUniversal } from "@COMPONENTS/Tables/universal/TableUniversal";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import { Button, Card, Drawer } from "antd";
import Title from "antd/lib/typography/Title";
import {
  Historia_Uzytkownik_Auto,
  Historia_Uzytkownik_Auto_Insert_Input,
  useAddHistoriaUzytkownikAutoMutation,
  useGetAllUzytkownikQuery,
  Uzytkownik,
  useGetHistoriaUzytkownikAutoForAutoQuery,
} from "generated/graphql";
import React, { FC, useState } from "react";
import { Column } from "react-table";
import { PlusCircleFilled } from "@ant-design/icons";
import AddButton from "@COMPONENTS/universal-components/AddButton";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { DateField, SelectField } from "@COMPONENTS/universal-components/Forms";
import { IPolaFormularza } from "@UTILS/IPolaFormularza";
import dayjs from "dayjs";
import { IGetOptions } from "@UTILS/IOptionSelect";
import { EditHistoriaUzytkownikowComponent } from "@PAGEHELPERS/lista/auto/id/edits";

export const COLUMNS: Column<Historia_Uzytkownik_Auto>[] = [
  {
    Header: "Użytkownik",
    accessor: (row) => `${row.Uzytkownik.imie} ${row.Uzytkownik.nazwisko}`,
    disableFilters: true,
  },
  {
    Header: "Data otrzymania samochodu",
    accessor: (row) => row.data_dodania_wlasciciela,
    disableFilters: true,
  },
  {
    Header: "Data oddania auta",
    accessor: (row) => row.data_oddania_auta,
    disableFilters: true,
  },
  {
    Header: "Edytuj",
    accessor: "id",
    id: "edytuj",
    Cell: (cell) => <EditHistoriaUzytkownikowComponent cell={cell} />,
    disableFilters: true,
  },
];

interface IHistoriaUzytkownicy {
  idAuto: number;
}

const HistoriaUzytkownicy: FC<IHistoriaUzytkownicy> = ({ idAuto }) => {
  const { data, loading, error } = useGetHistoriaUzytkownikAutoForAutoQuery({
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
        style={{ fontSize: 16 }}
        title={"Użytkownicy"}
        extra={<AddButton onClick={toggleDrawer} />}>
        {data?.Historia_Uzytkownik_Auto.length == 0 ? (
          <h1>Brak wpisów</h1>
        ) : (
          <TableUniversal
            data={data?.Historia_Uzytkownik_Auto}
            columns={COLUMNS}
          />
        )}
      </Card>
      <Drawer visible={isDrawerOpen} onClose={toggleDrawer}>
        <Title level={4}>Dodaj Użytkownika</Title>
        <AddComponent id_auto={idAuto} />
      </Drawer>
    </>
  );
};

export default HistoriaUzytkownicy;

const AddComponent = ({ id_auto }: Historia_Uzytkownik_Auto_Insert_Input) => {
  const [addHistoriaUzytkownikAuto] = useAddHistoriaUzytkownikAutoMutation();
  const router = useRouter();

  const { data, loading } = useGetAllUzytkownikQuery();

  const {
    control,
    handleSubmit,
    register,
  } = useForm<Historia_Uzytkownik_Auto_Insert_Input>({
    defaultValues: { id_auto },
  });

  const submitHandler = async (data: Historia_Uzytkownik_Auto_Insert_Input) => {
    console.log(data);
    const { data: dataReturned } = await addHistoriaUzytkownikAuto({
      variables: { data },
    });
    router.push(
      `/lista/auto/${dataReturned?.insert_Historia_Uzytkownik_Auto_one?.id_auto}`
    );
  };

  if (loading) {
    return <LoaderNoDash />;
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <DateField
          name={polaFormularza.data_dodania_wlasciciela}
          placeholder={"Podaj date otrzymania samochodu"}
          control={control}
          tytul={"Data otrzymania samochodu"}
          defaultValue={dayjs().format("YYYY-MM-DD")}
          required={true}
        />

        {/* TODO zastanowic sie co zrobic z data oddania samochodu przez uzytkownika */}

        <SelectField
          control={control}
          name={polaFormularza.id_uzytkownik}
          placeholder={"Wybierz użytkownika"}
          tytul={"Użytkownik"}
          required
          //todo
          options={getOptionsUzytkownik(data?.Uzytkownik!)}
        />

        {/* <TextField
          control={control}
          name={polaFormularza.rozmiar}
          tytul={"Rozmiar opon"}
          defaultValue={""}
          required
          placeholder={"Podaj rozmiar opon"}
        />

        <TextField
          control={control}
          name={polaFormularza.firma}
          tytul={"Firma"}
          defaultValue={"Nieznane"}
          required
          placeholder={"Podaj nazwe firmy"}
        />
        <TextField
          control={control}
          name={polaFormularza.detale}
          tytul={"Detale"}
          defaultValue={"brak detali"}
          required
          placeholder={"Dodaj dodatkowe informacje"}
        />

        <NumberField
          control={control}
          name={polaFormularza.koszt}
          tytul={"Koszt"}
          defaultValue={0}
          required
          placeholder={"Podaj koszt"}
        />
        {/*  */}

        <input
          name={polaFormularza.id_auto}
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

const polaFormularza: IPolaFormularza<Historia_Uzytkownik_Auto_Insert_Input> = {
  id: "id",
  id_auto: "id_auto",
  data_dodania_wlasciciela: "data_dodania_wlasciciela",
  data_oddania_auta: "data_oddania_auta",
  id_uzytkownik: "id_uzytkownik",
};

const getOptionsUzytkownik: IGetOptions<Uzytkownik> = (data) => {
  return data.map((item) => {
    return {
      label: `${item?.imie} ${item?.nazwisko}`,
      value: item?.id,
    };
  });
};
