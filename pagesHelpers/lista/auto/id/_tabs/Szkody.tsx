import { TableUniversal } from "@COMPONENTS/Tables/universal/TableUniversal";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import { Button, Card, Drawer } from "antd";
import Title from "antd/lib/typography/Title";
import {
  useGetSzkodaForAutoQuery,
  Szkoda_Insert_Input,
  Szkoda,
  Uzytkownik,
  useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery,
  useAddSzkodaMutation,
  useGetAllStatusSzkodyQuery,
  Status_Szkody,
} from "generated/graphql";
import React, { FC, useState } from "react";
import { Column } from "react-table";
import { PlusCircleFilled } from "@ant-design/icons";
import AddButton from "@COMPONENTS/universal-components/AddButton";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SelectField, TextField } from "@COMPONENTS/universal-components/Forms";
import { IPolaFormularza } from "@UTILS/IPolaFormularza";
import { IGetOptions } from "@UTILS/IOptionSelect";
import { EditSzkodyComponent } from "../edits";

export const COLUMNS: Column<Szkoda>[] = [
  {
    Header: "Kierowca",
    accessor: (row) => `${row.Uzytkownik.imie} ${row.Uzytkownik.nazwisko}`,
    disableFilters: true,
  },
  {
    Header: "Adres",
    accessor: (row) => row.adres,
    disableFilters: true,
  },
  {
    Header: "Status",
    accessor: (row) => row.Status_Szkody.nazwa_statusu,
    disableFilters: true,
  },
  {
    Header: "Uszkodzenia",
    accessor: (row) => row.uszkodzenia,
    disableFilters: true,
  },
  {
    Header: "Opis szkody",
    accessor: (row) => row.opis_szkody,
    disableFilters: true,
  },
  {
    Header: "Edytuj",
    accessor: "id",
    id: "edytuj",
    Cell: (cell) => {
      return <EditSzkodyComponent cell={cell} />;
    },
    disableFilters: true,
  },
];

interface IProps {
  idAuto: number;
}

const Szkody: FC<IProps> = ({ idAuto }) => {
  const { data, loading, error } = useGetSzkodaForAutoQuery({
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
      <Card
        bodyStyle={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        headStyle={{ fontSize: "1.5rem" }}
        style={{ fontSize: 16 }}
        title={"Szkody"}
        extra={<AddButton onClick={toggleDrawer} />}>
        {data?.Szkoda.length == 0 ? (
          <h1>Brak wpisów</h1>
        ) : (
          <TableUniversal data={data?.Szkoda} columns={COLUMNS} />
        )}
      </Card>
      <Drawer visible={isDrawerOpen} onClose={toggleDrawer}>
        <Title level={4}>Dodaj szkodę</Title>
        <AddComponent id_auto={idAuto} />
      </Drawer>
    </>
  );
};

export default Szkody;

const AddComponent = ({ id_auto }: Szkoda_Insert_Input) => {
  const [addOpona] = useAddSzkodaMutation();
  const router = useRouter();

  const {
    data,
    loading,
  } = useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery({
    variables: { id_auto: id_auto! },
  });

  const {
    data: dataStatusSzkody,
    loading: loadingStatusSzkody,
  } = useGetAllStatusSzkodyQuery();

  const { control, handleSubmit, register } = useForm<Szkoda_Insert_Input>({
    defaultValues: { id_auto },
  });

  const submitHandler = async (data: Szkoda_Insert_Input) => {
    console.log(data);
    const { data: dataReturned } = await addOpona({ variables: { data } });
    router.push(`/lista/auto/${dataReturned?.insert_Szkoda_one?.id_auto}`);
  };

  if (loading || loadingStatusSzkody) {
    return <LoaderNoDash />;
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <SelectField
          control={control}
          name={polaFormularza.id_status_szkody}
          placeholder={"Wybierz status szkody"}
          tytul={"Status szkody"}
          required
          //   TODO
          options={getOptionsStatusSzkody(dataStatusSzkody?.Status_Szkody!)}
        />

        <SelectField
          control={control}
          name={polaFormularza.id_uzytkownik}
          placeholder={"Wybierz uzytkownika"}
          tytul={"Użytkownik szkody"}
          required
          //   TODO
          options={getOptionsUzytkownik(data?.Uzytkownik!)}
        />

        <TextField
          control={control}
          name={polaFormularza.adres}
          tytul={"Adres szkody"}
          defaultValue={""}
          required
          placeholder={"Podaj adres szkody"}
        />

        <TextField
          control={control}
          name={polaFormularza.opis_szkody}
          tytul={"Opis szkody"}
          defaultValue={""}
          required
          placeholder={"Podaj opis szkody"}
        />

        <TextField
          control={control}
          name={polaFormularza.uszkodzenia}
          tytul={"Uszkodzenia"}
          defaultValue={""}
          required
          placeholder={"Opisz uszkodzenia"}
        />

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

const polaFormularza: IPolaFormularza<Szkoda_Insert_Input> = {
  adres: "adres",
  id_status_szkody: "id_status_szkody",
  opis_szkody: "opis_szkody",
  uszkodzenia: "uszkodzenia",
  id_uzytkownik: "id_uzytkownik",
  id_auto: "id_auto",
  id: "id",
};

const getOptionsStatusSzkody: IGetOptions<Status_Szkody> = (data) => {
  return data.map((item) => {
    return {
      label: `${item?.nazwa_statusu}`,
      value: item?.id,
    };
  });
};

const getOptionsUzytkownik: IGetOptions<Uzytkownik> = (data) => {
  return data.map((item) => {
    return {
      label: `${item?.imie} ${item?.nazwisko}`,
      value: item?.id,
    };
  });
};
