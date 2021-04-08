import { TableUniversal } from "@COMPONENTS/Tables/universal/TableUniversal";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import { Button, Card, Drawer } from "antd";
import Title from "antd/lib/typography/Title";
import {
  Opona_Insert_Input,
  Opona,
  Typy_Opon,
  useGetAllTypyOponQuery,
  useGetOponaForAutoQuery,
  useAddOponaMutation,
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
import { IPolaFormularza } from "@UTILS/IPolaFormularza";
import dayjs from "dayjs";
import { IGetOptions } from "@UTILS/IOptionSelect";
import { EditOponaComponent } from "../edits";

export const COLUMNS: Column<Opona>[] = [
  {
    Header: "Firma",
    accessor: (row) => row.firma,
    disableFilters: true,
  },
  {
    Header: "Typ opony",
    accessor: (row) => row.Typy_Opon.nazwa_typu,
    disableFilters: true,
  },
  {
    Header: "Koszt",
    accessor: (row) => row.koszt,
    disableFilters: true,
  },
  {
    Header: "Rozmiar",
    accessor: (row) => row.rozmiar,
    disableFilters: true,
  },
  {
    Header: "Data zakupu",
    accessor: (row) => row.data_zakupu,
    disableFilters: true,
  },
  {
    Header: "Detale",
    accessor: (row) => row.detale,
    disableFilters: true,
  },
  {
    Header: "Edytuj",
    accessor: "id",
    id: "edytuj",
    Cell: (cell) => {
      return <EditOponaComponent cell={cell} />;
    },
    disableFilters: true,
  },
];

interface IOponyProps {
  idAuto: number;
}

const Opony: FC<IOponyProps> = ({ idAuto }) => {
  const { data, loading, error } = useGetOponaForAutoQuery({
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
        title={"Opony"}
        extra={<AddButton onClick={toggleDrawer} />}>
        {data?.Opona.length == 0 ? (
          <h1>Brak wpisów</h1>
        ) : (
          <TableUniversal data={data?.Opona} columns={COLUMNS} />
        )}
      </Card>
      <Drawer visible={isDrawerOpen} onClose={toggleDrawer}>
        <Title level={4}>Dodaj Opony</Title>
        <AddComponent id_auto={idAuto} />
      </Drawer>
    </>
  );
};

export default Opony;

const AddComponent = ({ id_auto }: Opona_Insert_Input) => {
  const [addOpona] = useAddOponaMutation();
  const router = useRouter();

  const { data, loading } = useGetAllTypyOponQuery();

  const { control, handleSubmit, register } = useForm<Opona_Insert_Input>({
    defaultValues: { id_auto },
  });

  const submitHandler = async (data: Opona_Insert_Input) => {
    console.log(data);
    const { data: dataReturned } = await addOpona({ variables: { data } });
    router.push(`/lista/auto/${dataReturned?.insert_Opona_one?.id_auto}`);
  };

  if (loading) {
    return <LoaderNoDash />;
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <DateField
          name={polaFormularza.data_zakupu}
          placeholder={"Podaj datę zakupu"}
          control={control}
          tytul={"Data zakupu"}
          defaultValue={dayjs().format("YYYY-MM-DD")}
          required={true}
        />
        <SelectField
          control={control}
          name={polaFormularza.id_typy_opon}
          placeholder={"Podaj typ opony"}
          tytul={"Typ opony"}
          required
          options={getOptionsTypyOpon(data?.Typy_Opon!)}
        />

        <TextField
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

const polaFormularza: IPolaFormularza<Opona_Insert_Input> = {
  data_zakupu: "data_zakupu",
  detale: "detale",
  firma: "firma",
  id: "id",
  id_auto: "id_auto",
  id_typy_opon: "id_typy_opon",
  koszt: "koszt",
  rozmiar: "rozmiar",
};

const getOptionsTypyOpon: IGetOptions<Typy_Opon> = (data) => {
  return data.map((item) => {
    return {
      label: `${item?.nazwa_typu}`,
      value: item?.id,
    };
  });
};
