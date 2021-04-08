import { TableUniversal } from "@COMPONENTS/Tables/universal/TableUniversal";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import boolPonglishToString from "@UTILS/boolPonglishToString";
import { Button, Card, Drawer } from "antd";
import Title from "antd/lib/typography/Title";
import {
  Przeglad,
  Przeglad_Insert_Input,
  useAddPrzegladMutation,
  useGetPrzegladyForAutoQuery,
  Przeglad_Koszta_Dodatkowe_Insert_Input,
  Przeglad_Ot_Kilometry,
  useGetAllPrzegladyOtKilometryQuery,
} from "generated/graphql";
import React, { FC, useState } from "react";
import { Column } from "react-table";
import { PlusCircleFilled } from "@ant-design/icons";
import AddButton from "@COMPONENTS/universal-components/AddButton";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import {
  CheckboxField,
  DateField,
  NumberField,
  SelectField,
} from "@COMPONENTS/universal-components/Forms";
import {
  IPolaFormularza,
  IPolaFormularzaPrefixed,
} from "@UTILS/IPolaFormularza";
import dayjs from "dayjs";
import IOptionSelect from "@UTILS/IOptionSelect";
import { EditPrzegladyComponent } from "../edits";

export const COLUMNS: Column<Przeglad>[] = [
  {
    Header: "Kilometry",
    accessor: (row) => row.Przeglad_OT_Kilometry.ilosc_kilometrow_w_tysiacach,
    disableFilters: true,
  },
  {
    Header: "Klimatyzacja",
    accessor: (row) => row.Przeglad_Koszta_Dodatkowe.koszt_klimatyzacja,
    disableFilters: true,
  },
  {
    Header: "MacPherson",
    accessor: (row) => row.Przeglad_Koszta_Dodatkowe.koszt_MacPhersona,
    disableFilters: true,
  },
  {
    Header: "Hamulce",
    accessor: (row) => row.Przeglad_Koszta_Dodatkowe.koszt_hamulce,
    disableFilters: true,
  },
  {
    Header: "Rozrząd",
    accessor: (row) => row.Przeglad_Koszta_Dodatkowe.koszt_rozrzad,
    disableFilters: true,
  },
  {
    Header: "Sprzęgło",
    accessor: (row) => row.Przeglad_Koszta_Dodatkowe.koszt_sprzeglo,
    disableFilters: true,
  },
  {
    Header: "Data przeglądu",
    accessor: (row) => row.data_przegladu,
    disableFilters: true,
  },
  {
    Header: "Wymiana rozrządu",
    accessor: (row) => boolPonglishToString(row.is_wymiana_rozrzadu),
    disableFilters: true,
  },
  {
    Header: "Edytuj",
    accessor: "id",
    id: "edytuj",
    Cell: (cell) => {
      return <EditPrzegladyComponent cell={cell} />;
    },
    disableFilters: true,
  },
];

interface IPrzegladyProps {
  idAuto: number;
}

const Przeglady: FC<IPrzegladyProps> = ({ idAuto }) => {
  const { data, loading, error } = useGetPrzegladyForAutoQuery({
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
        title={"Przeglądy"}
        extra={<AddButton onClick={toggleDrawer} />}>
        {data?.Przeglad.length == 0 ? (
          <h1>Brak wpisów</h1>
        ) : (
          <TableUniversal data={data?.Przeglad} columns={COLUMNS} />
        )}
      </Card>
      <Drawer visible={isDrawerOpen} onClose={toggleDrawer}>
        <Title level={4}>Dodaj przegląd</Title>
        <AddComponent id_auto={idAuto} />
      </Drawer>
    </>
  );
};

export default Przeglady;

const AddComponent = ({ id_auto }: Przeglad_Insert_Input) => {
  const [add] = useAddPrzegladMutation();
  const router = useRouter();

  const { data, loading } = useGetAllPrzegladyOtKilometryQuery();

  const { control, handleSubmit, register } = useForm<Przeglad_Insert_Input>({
    defaultValues: { id_auto },
  });

  const submitHandler = async (data: Przeglad_Insert_Input) => {
    console.log(data);
    const { data: dataReturned } = await add({ variables: { data } });
    router.push(`/lista/auto/${dataReturned?.insert_Przeglad_one?.id_auto}`);
  };

  if (loading) {
    return <LoaderNoDash />;
  }
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <SelectField
          control={control}
          name={polaFormularzaPrzeglad.id_przeglad_ot_kilometry}
          placeholder={"Podaj ilość kilometrów przeglądu"}
          tytul={"Km przeglądu"}
          required
          options={getOptionsPrzegladOtKilometry(data?.Przeglad_OT_Kilometry!)}
        />

        <DateField
          name={polaFormularzaPrzeglad.data_przegladu}
          placeholder={"Podaj datę przeglądu"}
          control={control}
          tytul={"Data przeglądu"}
          defaultValue={dayjs().format("YYYY-MM-DD")}
          required={true}
        />

        <NumberField
          control={control}
          name={
            polaFormularzaKoszta[
              "Przeglad_Koszta_Dodatkowe.data.koszt_MacPhersona"
            ]
          }
          tytul={"Koszt MacPhersona"}
          defaultValue={0}
          required
          placeholder={"Podaj koszt MacPhersonów"}
        />

        <NumberField
          control={control}
          name={
            polaFormularzaKoszta["Przeglad_Koszta_Dodatkowe.data.koszt_hamulce"]
          }
          tytul={"Koszt Hamulców"}
          defaultValue={0}
          required
          placeholder={"Podaj koszt hamulców"}
        />

        <NumberField
          control={control}
          name={
            polaFormularzaKoszta[
              "Przeglad_Koszta_Dodatkowe.data.koszt_klimatyzacja"
            ]
          }
          tytul={"Koszt klimatyzacji"}
          defaultValue={0}
          required
          placeholder={"Podaj klimatyzacji"}
        />

        <NumberField
          control={control}
          name={
            polaFormularzaKoszta["Przeglad_Koszta_Dodatkowe.data.koszt_rozrzad"]
          }
          tytul={"Koszt rozrządu"}
          defaultValue={0}
          required
          placeholder={"Podaj koszt rozrządu"}
        />

        <NumberField
          control={control}
          name={
            polaFormularzaKoszta[
              "Przeglad_Koszta_Dodatkowe.data.koszt_sprzeglo"
            ]
          }
          tytul={"Koszt sprzęgła"}
          defaultValue={0}
          required
          placeholder={"Podaj koszt sprzęgła"}
        />

        <CheckboxField
          control={control}
          name={polaFormularzaPrzeglad.is_wymiana_rozrzadu}
          tytul={"Czy wymieniano rozrząd?"}
        />

        <input
          name={polaFormularzaPrzeglad.id_auto}
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

const polaFormularzaPrzeglad: IPolaFormularza<Przeglad_Insert_Input> = {
  data_przegladu: "data_przegladu",
  id_auto: "id_auto",
  is_wymiana_rozrzadu: "is_wymiana_rozrzadu",
  id_przeglad_koszta_dodatkowe: "id_przeglad_koszta_dodatkowe",
  id_przeglad_ot_kilometry: "id_przeglad_ot_kilometry",
  id: "id",
};

const polaFormularzaKoszta: IPolaFormularzaPrefixed<
  Przeglad_Koszta_Dodatkowe_Insert_Input,
  "Przeglad_Koszta_Dodatkowe.data"
> = {
  "Przeglad_Koszta_Dodatkowe.data.id": "Przeglad_Koszta_Dodatkowe.data.id",
  "Przeglad_Koszta_Dodatkowe.data.koszt_MacPhersona":
    "Przeglad_Koszta_Dodatkowe.data.koszt_MacPhersona",
  "Przeglad_Koszta_Dodatkowe.data.koszt_hamulce":
    "Przeglad_Koszta_Dodatkowe.data.koszt_hamulce",
  "Przeglad_Koszta_Dodatkowe.data.koszt_klimatyzacja":
    "Przeglad_Koszta_Dodatkowe.data.koszt_klimatyzacja",
  "Przeglad_Koszta_Dodatkowe.data.koszt_rozrzad":
    "Przeglad_Koszta_Dodatkowe.data.koszt_rozrzad",
  "Przeglad_Koszta_Dodatkowe.data.koszt_sprzeglo":
    "Przeglad_Koszta_Dodatkowe.data.koszt_sprzeglo",
};

const getOptionsPrzegladOtKilometry = (
  data: Partial<Przeglad_Ot_Kilometry>[]
): IOptionSelect[] => {
  return data.map((przegladOtKilometry) => {
    return {
      label: `${przegladOtKilometry?.ilosc_kilometrow_w_tysiacach} k`,
      value: przegladOtKilometry?.id,
    };
  });
};
