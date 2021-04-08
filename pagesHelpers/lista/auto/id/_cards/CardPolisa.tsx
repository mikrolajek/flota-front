import { PlusCircleFilled } from "@ant-design/icons";
import { IPolaFormularza } from "@UTILS/IPolaFormularza";
import {
  CardExtented,
  CardItem,
} from "@COMPONENTS/universal-components/CardExtended";
import { DateField, TextField } from "@COMPONENTS/universal-components/Forms";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import {
  Polisa_Insert_Input,
  useAddPolisaMutation,
  useGetPolisaForAutoQuery,
  useUpdatePolisaByPkMutation,
} from "generated/graphql";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { useRouter } from "next/router";
import dayjs from "dayjs";

export const polaFormularza: IPolaFormularza<Polisa_Insert_Input> = {
  id: "id",
  id_auto: "id_auto",
  ac_oc: "ac_oc",
  nr_polisy: "nr_polisy",
  ubezpieczyciel: "ubezpieczyciel",
  data_rozpoczecia_polisy: "data_rozpoczecia_polisy",
};

interface ICardPolisaProps {
  idAuto: number;
}

export const CardPolisa: FC<ICardPolisaProps> = ({ idAuto }) => {
  const { data, loading, error } = useGetPolisaForAutoQuery({
    variables: { id: idAuto },
  });
  const [idField, setIdField] = useState<number>();
  const [idAutoField, setIdAutoField] = useState<number>();
  const [acOcField, setAcOcField] = useState<string>();
  const [nrPolisyField, setNrPolisyField] = useState<string>();
  const [ubezpieczycielField, setUbezpieczycielField] = useState<string>();
  const [
    dataRozpoczeciaPolisyField,
    setDataRozpoczeciaPolisyField,
  ] = useState<string>();

  useEffect(() => {
    if (!loading && !error) {
      setIdField(data?.Polisa[0]?.id);
      setIdAutoField(data?.Polisa[0]?.id_auto);
      setAcOcField(data?.Polisa[0]?.ac_oc);
      setNrPolisyField(data?.Polisa[0]?.nr_polisy);
      setUbezpieczycielField(data?.Polisa[0]?.ubezpieczyciel);
      setDataRozpoczeciaPolisyField(data?.Polisa[0]?.data_rozpoczecia_polisy);
      setAcOcField(data?.Polisa[0]?.ac_oc);
    }
  }, [loading]);

  if (loading) {
    <LoaderNoDash />;
  }
  return (
    <CardExtented
      isDataChecker={data?.Polisa.length !== 0 || undefined ? true : false}
      cardProps={{
        title: "Polisa",
      }}
      AddComponent={<AddComponent {...data?.Polisa[0]} id_auto={idAuto} />}
      EditComponent={<EditComponent {...data?.Polisa[0]} id_auto={idAuto} />}>
      <CardItem label={"AC/OC"} content={acOcField} />
      <CardItem label={"Numer polisy"} content={nrPolisyField} />
      <CardItem label={"Ubezpieczyciel"} content={ubezpieczycielField} />
      <CardItem
        label={"Data rozpoczecia"}
        content={dataRozpoczeciaPolisyField}
      />
    </CardExtented>
  );
};

const AddComponent = ({ id, id_auto }: Polisa_Insert_Input) => {
  const [addPolisa] = useAddPolisaMutation();
  const router = useRouter();

  const { control, handleSubmit, register } = useForm<Polisa_Insert_Input>({
    defaultValues: { id_auto },
  });

  const submitHandler = async (data: Polisa_Insert_Input) => {
    console.log(data);
    const { data: dataReturned } = await addPolisa({ variables: { data } });
    router.push(`/lista/auto/${dataReturned?.insert_Polisa_one?.id_auto}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          name={polaFormularza.ac_oc}
          placeholder={"Podaj AC czy OC czy AC-OC"}
          control={control}
          tytul={"AC/OC/AC-OC"}
          defaultValue={"Ac"}
          required={true}
        />

        <TextField
          name={polaFormularza.nr_polisy}
          placeholder={"Podaj numer polisy"}
          control={control}
          tytul={"Numer polisy"}
          defaultValue={""}
          required={true}
        />

        <TextField
          name={polaFormularza.ubezpieczyciel}
          placeholder={"Podaj ubezpieczyciela"}
          control={control}
          tytul={"Ubezpieczyciel"}
          defaultValue={""}
          required={true}
        />

        <DateField
          name={polaFormularza.data_rozpoczecia_polisy}
          placeholder={"Podaj datę rozpoczęcia polisy"}
          control={control}
          tytul={"Data rozpoczęcia polisy"}
          defaultValue={dayjs().format("YYYY-MM-DD")}
          required={true}
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

const EditComponent = ({
  id,
  data_rozpoczecia_polisy,
  id_auto,
  ac_oc,
  nr_polisy,
  ubezpieczyciel,
}: Polisa_Insert_Input) => {
  const [updatePolisa] = useUpdatePolisaByPkMutation();
  const router = useRouter();

  const { control, handleSubmit, register } = useForm<Polisa_Insert_Input>({
    defaultValues: { id_auto },
  });

  const submitHandler = async (data: Polisa_Insert_Input) => {
    console.log(data, "submitHandler");
    const { data: dataReturned } = await updatePolisa({
      variables: { id: id!, data },
    });
    router.push(`/lista/auto/${dataReturned?.update_Polisa_by_pk?.id_auto}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          name={polaFormularza.ac_oc}
          placeholder={"Podaj AC czy OC czy AC-OC"}
          control={control}
          tytul={"AC/OC/AC-OC"}
          defaultValue={ac_oc}
          required={true}
        />

        <TextField
          name={polaFormularza.nr_polisy}
          placeholder={"Podaj numer polisy"}
          control={control}
          tytul={"Numer polisy"}
          defaultValue={nr_polisy}
          required={true}
        />

        <TextField
          name={polaFormularza.ubezpieczyciel}
          placeholder={"Podaj ubezpieczyciela"}
          control={control}
          tytul={"Ubezpieczyciel"}
          defaultValue={ubezpieczyciel}
          required={true}
        />

        <DateField
          name={polaFormularza.data_rozpoczecia_polisy}
          placeholder={"Podaj datę rozpoczęcia polisy"}
          control={control}
          defaultValue={data_rozpoczecia_polisy}
          tytul={"Data rozpoczęcia polisy"}
          required={true}
        />

        <input
          name={polaFormularza.id_auto}
          ref={register({ valueAsNumber: true })}
          value={id_auto}
          onChange={() => {}}
          hidden={true}
          type={"number"}
        />

        <input
          name={polaFormularza.id}
          ref={register({ valueAsNumber: true })}
          value={id}
          onChange={() => {}}
          hidden={true}
          type={"number"}
        />

        <Button
          icon={<PlusCircleFilled />}
          type="primary"
          htmlType={"submit"}
          size="large">
          Edytuj
        </Button>
      </form>
    </>
  );
};
export default CardPolisa;
