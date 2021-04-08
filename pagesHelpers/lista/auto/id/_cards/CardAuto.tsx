import { PlusCircleFilled } from "@ant-design/icons";
import { IPolaFormularza } from "@UTILS/IPolaFormularza";
import {
  CardExtented,
  CardItem,
} from "@COMPONENTS/universal-components/CardExtended";
import {
  CheckboxField,
  NumberField,
  TextAreaField,
  TextField,
} from "@COMPONENTS/universal-components/Forms";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import {
  Auto_Insert_Input,
  useGetAutoForAutoQuery,
  useUpdateAutoByPkMutation,
} from "generated/graphql";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { useRouter } from "next/router";

const polaFormularza: IPolaFormularza<Auto_Insert_Input> = {
  id: "id",
  gwarancja: "gwarancja",
  is_w_uzyciu: "is_w_uzyciu",
  marka: "marka",
  model: "model",
  numer_rejestracyjny: "numer_rejestracyjny",
  numer_vin: "numer_vin",
  paliwo: "paliwo",
  rok_produkcji: "rok_produkcji",
  stan_licznika: "stan_licznika",
  uwagi: "uwagi",
};

interface IProps {
  id: number;
}

export const CardAuto: FC<IProps> = ({ id }) => {
  const { data, loading, error } = useGetAutoForAutoQuery({
    variables: { id },
  });
  const [idField, setIdField] = useState<number>();
  const [gwarancjaField, setGwarancjaField] = useState<string>();
  const [paliwoField, setPaliwoField] = useState<string>();
  const [rokProdukcjiField, setRokProdukcjiField] = useState<number>();
  const [markaField, setMarkaField] = useState<string>();
  const [modelField, setModelField] = useState<string>();
  const [numerVinField, setNumerVinField] = useState<string>();
  const [
    numerRejestracynyField,
    setNumerRejestracynyField,
  ] = useState<string>();
  const [uwagiField, setUwagiField] = useState<string>();
  const [isWUzyciuField, setIsWUzyciuField] = useState<boolean>();

  useEffect(() => {
    if (!loading && !error) {
      setIdField(data?.Auto_by_pk?.id);
      setGwarancjaField(data?.Auto_by_pk?.gwarancja);
      setIsWUzyciuField(data?.Auto_by_pk?.is_w_uzyciu);
      setPaliwoField(data?.Auto_by_pk?.paliwo);
      setRokProdukcjiField(data?.Auto_by_pk?.rok_produkcji);
      setMarkaField(data?.Auto_by_pk?.marka);
      setModelField(data?.Auto_by_pk?.model);
      setNumerRejestracynyField(data?.Auto_by_pk?.numer_rejestracyjny);
      setNumerVinField(data?.Auto_by_pk?.numer_vin);
      setUwagiField(data?.Auto_by_pk?.uwagi);
    }
  }, [loading]);

  if (loading) {
    <LoaderNoDash />;
  }

  return (
    <CardExtented
      isDataChecker={data?.Auto_by_pk?.id || undefined ? true : false}
      cardProps={{
        title: "Auto",
      }}
      EditComponent={<EditComponent {...data?.Auto_by_pk} />}>
      <CardItem label={"Id"} content={idField} />
      <CardItem label={"Model"} content={modelField} />
      <CardItem label={"Marka"} content={markaField} />
      <CardItem
        label={"Numer rejestracyjny"}
        content={numerRejestracynyField}
      />
      <CardItem label={"Numer vin"} content={numerVinField} />
      <CardItem label={"Rok produkcji"} content={rokProdukcjiField} />
      <CardItem label={"Paliwo"} content={paliwoField} />
      <CardItem label={"Gwarancja"} content={gwarancjaField} />
      <CardItem label={"Uwagi"} content={uwagiField} />
      <CardItem label={"W uzyciu"} content={isWUzyciuField} />
    </CardExtented>
  );
};

const EditComponent: FC<Auto_Insert_Input> = ({
  id,
  gwarancja,
  paliwo,
  rok_produkcji,
  marka,
  model,
  numer_rejestracyjny,
  numer_vin,
  uwagi,
  is_w_uzyciu,
}) => {
  const [updateKartaOrlen] = useUpdateAutoByPkMutation();
  const router = useRouter();

  const { control, handleSubmit, register } = useForm<Auto_Insert_Input>({
    defaultValues: { id },
  });

  const submitHandler = async (data: Auto_Insert_Input) => {
    console.log(data, "submitHandler");
    const { data: dataReturned } = await updateKartaOrlen({
      variables: { id: id!, data },
    });
    router.push(`/lista/auto/${dataReturned?.update_Auto_by_pk?.id}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextField
          name={polaFormularza.marka}
          placeholder={"Podaj markę"}
          control={control}
          defaultValue={marka}
          tytul={"Marka"}
          required={true}
        />

        <TextField
          name={polaFormularza.model}
          placeholder={"Podaj model"}
          control={control}
          defaultValue={model}
          tytul={"Model"}
          required={true}
        />

        <TextField
          name={polaFormularza.paliwo}
          placeholder={"Podaj typ paliwa"}
          control={control}
          defaultValue={paliwo}
          tytul={"Paliwo"}
          required={true}
        />

        <TextField
          name={polaFormularza.numer_rejestracyjny}
          placeholder={"Podaj numer rejestracyjny"}
          control={control}
          defaultValue={numer_rejestracyjny}
          tytul={"Numer rejestracyjny"}
          required={true}
        />

        <TextField
          name={polaFormularza.numer_vin}
          placeholder={"Podaj numer vin"}
          control={control}
          defaultValue={numer_vin}
          tytul={"Numer vin"}
          required={true}
        />

        <NumberField
          name={polaFormularza.rok_produkcji}
          placeholder={"Podaj rok produkcji"}
          control={control}
          tytul={"Rok produkcji"}
          defaultValue={rok_produkcji}
          required={true}
        />

        <TextField
          name={polaFormularza.gwarancja}
          placeholder={"Podaj gwarancje"}
          control={control}
          defaultValue={gwarancja}
          tytul={"Gwarancja"}
          required={true}
        />

        <CheckboxField
          name={polaFormularza.is_w_uzyciu}
          control={control}
          tytul={"Czy w użyciu"}
          defaultValue={is_w_uzyciu}
          // required={true}
        />
        <TextAreaField
          name={polaFormularza.uwagi}
          placeholder={"Podaj uwagi"}
          control={control}
          defaultValue={uwagi}
          tytul={"Uwagi"}
          required={true}
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

export default CardAuto;
// const AddComponent: FC<Auto_Insert_Input> = ({
//   id,
//   data_waznosci,
//   pin,
//   id_auto,
// }) => {
//   const [addKartaOrlen] = useAddKartaOrlenMutation();
//   const router = useRouter();

//   const { control, handleSubmit, register } = useForm<Auto_Insert_Input>({
//     defaultValues: { id_auto },
//   });

//   const submitHandler = async (data: Auto_Insert_Input) => {
//     const { data: dataReturned } = await addKartaOrlen({ variables: { data } });
//     router.push(`/lista/auto/${dataReturned?.insert_Karta_Orlen_one?.id_auto}`);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit(submitHandler)}>
//         <NumberField
//           name={polaFormularza.pin}
//           placeholder={"Podaj pin"}
//           required={true}
//           tytul={"Pin"}
//           control={control}
//           defaultValue={pin}
//         />

//         <DateField
//           name={polaFormularza.data_waznosci}
//           placeholder={"Podaj datę ważności"}
//           control={control}
//           tytul={"Data ważności"}
//           required={true}
//         />
//         <input
//           name={polaFormularza.id_auto}
//           ref={register({ valueAsNumber: true })}
//           value={id_auto}
//           hidden={true}
//           type={"number"}
//         />
//         <Button
//           icon={<PlusCircleFilled />}
//           type="primary"
//           htmlType={"submit"}
//           size="large">
//           Dodaj
//         </Button>
//       </form>
//     </>
//   );
// };
{
  /* 
        <input
          name={polaFormularza.id}
          ref={register({ valueAsNumber: true })}
          value={id}
          onChange={() => {}}
          hidden={true}
          type={"number"}
        /> */
}
