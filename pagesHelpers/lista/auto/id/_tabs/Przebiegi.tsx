import { TableUniversal } from "@COMPONENTS/Tables/universal/TableUniversal";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import { Button, Card, Drawer } from "antd";
import Title from "antd/lib/typography/Title";
import {
  Przebieg_Insert_Input,
  useAddPrzebiegMutation,
  Przebieg,
  useGetPrzebiegForAutoQuery,
} from "generated/graphql";
import React, { FC, useState } from "react";
import { Column } from "react-table";
import { PlusCircleFilled } from "@ant-design/icons";
import AddButton from "@COMPONENTS/universal-components/AddButton";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { NumberField } from "@COMPONENTS/universal-components/Forms";
import { IPolaFormularza } from "@UTILS/IPolaFormularza";
import { EditPrzebiegiComponent } from "../edits";

export const COLUMNS: Column<Przebieg>[] = [
  {
    Header: "Id",
    accessor: (row) => row.id,
    disableFilters: true,
  },
  {
    Header: "Przebieg",
    accessor: (row) => row.przebieg,
    disableFilters: true,
  },
  {
    Header: "Data przebiegu",
    accessor: (row) => row.data_przebiegu!,
    disableFilters: true,
  },
  {
    Header: "Edytuj",
    accessor: "id",
    id: "edytuj",
    Cell: (cell) => <EditPrzebiegiComponent cell={cell} />,
    disableFilters: true,
  },
];

interface IProps {
  idAuto: number;
}

const Przebiegi: FC<IProps> = ({ idAuto }) => {
  const { data, loading, error } = useGetPrzebiegForAutoQuery({
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
        title={"Przebiegi"}
        extra={<AddButton onClick={toggleDrawer} />}>
        {data?.Przebieg.length == 0 ? (
          <h1>Brak wpisów</h1>
        ) : (
          <TableUniversal data={data?.Przebieg} columns={COLUMNS} />
        )}
      </Card>
      <Drawer visible={isDrawerOpen} onClose={toggleDrawer}>
        <Title level={4}>Dodaj przebieg</Title>
        <AddComponent id_auto={idAuto} />
      </Drawer>
    </>
  );
};

export default Przebiegi;

const AddComponent = ({ id_auto }: Przebieg_Insert_Input) => {
  const [addPrzebieg] = useAddPrzebiegMutation();
  const router = useRouter();

  const { control, handleSubmit, register } = useForm<Przebieg_Insert_Input>({
    defaultValues: { id_auto },
  });

  const submitHandler = async (data: Przebieg_Insert_Input) => {
    console.log(data);
    const { data: dataReturned } = await addPrzebieg({ variables: { data } });
    router.push(`/lista/auto/${dataReturned?.insert_Przebieg_one?.id_auto}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <NumberField
          control={control}
          name={polaFormularza.przebieg}
          tytul={"Przebieg"}
          defaultValue={0}
          required
          placeholder={"Podaj aktualny przebieg"}
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

const polaFormularza: IPolaFormularza<Przebieg_Insert_Input> = {
  id: "id",
  id_auto: "id_auto",
  data_przebiegu: "data_przebiegu",

  //Reszta pól jest niepotrzebna
  data_przegladu: "data_przegladu",

  //To pole może być (i powinno być) kalkulowane w locie.
  przebieg_z_poczatku_miesiaca: "przebieg_z_poczatku_miesiaca",
  przebieg: "przebieg",

  //Te pola tworzeone są na bazie dancych.
  created_at: "created_at",
  updated_at: "updated_at",
};
