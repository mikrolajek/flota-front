import { PlusCircleFilled } from "@ant-design/icons";
import { IPolaFormularza } from "@UTILS/IPolaFormularza";
import {
  CardExtented,
  CardItem,
} from "@COMPONENTS/universal-components/CardExtended";
import { DateField, NumberField } from "@COMPONENTS/universal-components/Forms";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import {
  Karta_Orlen_Insert_Input,
  useAddKartaOrlenMutation,
  useGetKartaOrlenForAutoQuery,
  useUpdateKartaOrlenByPkMutation,
} from "generated/graphql";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { useRouter } from "next/router";

interface ICardKartaOrlenProps {
  id: number;
}

export const CardKartaOrlen: FC<ICardKartaOrlenProps> = ({ id }) => {
  const { data, loading, error } = useGetKartaOrlenForAutoQuery({
    variables: { id },
  });
  const [idField, setIdField] = useState<number>();
  const [pinField, setPinField] = useState<number>();
  const [dataWaznosciField, setDataWaznosci] = useState<string>();
  useEffect(() => {
    if (!loading && !error) {
      setPinField(data?.Karta_Orlen[0]?.pin);
      setIdField(data?.Karta_Orlen[0]?.id);
      setDataWaznosci(data?.Karta_Orlen[0]?.data_waznosci);
    }
  }, [loading]);

  if (loading) {
    <LoaderNoDash />;
  }

  return (
    <CardExtented
      isDataChecker={data?.Karta_Orlen.length !== 0 || undefined ? true : false}
      cardProps={{
        title: "Karta Orlen",
      }}
      AddComponent={<AddComponent {...data?.Karta_Orlen[0]} id_auto={id} />}
      EditComponent={<EditComponent {...data?.Karta_Orlen[0]} id_auto={id} />}>
      <CardItem label={"Id"} content={idField} />
      <CardItem label={"Pin"} content={pinField} />
      <CardItem label={"Data ważności"} content={dataWaznosciField} />
    </CardExtented>
  );
};

interface IAddField {}

const AddComponent: FC<Karta_Orlen_Insert_Input> = ({
  id,
  data_waznosci,
  pin,
  id_auto,
}) => {
  const [addKartaOrlen] = useAddKartaOrlenMutation();
  const router = useRouter();

  const { control, handleSubmit, register } = useForm<Karta_Orlen_Insert_Input>(
    {
      defaultValues: { id_auto },
    }
  );

  const submitHandler = async (data: Karta_Orlen_Insert_Input) => {
    const { data: dataReturned } = await addKartaOrlen({ variables: { data } });
    router.push(`/lista/auto/${dataReturned?.insert_Karta_Orlen_one?.id_auto}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <NumberField
          name={polaFormularza.pin}
          placeholder={"Podaj pin"}
          required={true}
          tytul={"Pin"}
          control={control}
          defaultValue={pin}
        />

        <DateField
          name={polaFormularza.data_waznosci}
          placeholder={"Podaj datę ważności"}
          control={control}
          tytul={"Data ważności"}
          required={true}
        />
        <input
          name={polaFormularza.id_auto}
          ref={register({ valueAsNumber: true })}
          value={id_auto}
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

const EditComponent: FC<Karta_Orlen_Insert_Input> = ({
  id,
  data_waznosci,
  id_auto,
  pin,
}) => {
  const [updateKartaOrlen] = useUpdateKartaOrlenByPkMutation();
  const router = useRouter();

  const { control, handleSubmit, register } = useForm<Karta_Orlen_Insert_Input>(
    {
      defaultValues: { id_auto, id },
    }
  );

  const submitHandler = async (data: Karta_Orlen_Insert_Input) => {
    console.log(data, "submitHandler");
    const { data: dataReturned } = await updateKartaOrlen({
      variables: { id: id!, data },
    });
    router.push(
      `/lista/auto/${dataReturned?.update_Karta_Orlen_by_pk?.id_auto}`
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <DateField
          name={polaFormularza.data_waznosci}
          placeholder={"Podaj datę ważności karty"}
          control={control}
          defaultValue={data_waznosci}
          tytul={"Data ważności"}
          required={true}
        />

        <NumberField
          name={polaFormularza.pin}
          placeholder={"Podaj pin"}
          control={control}
          tytul={"Pin karty"}
          defaultValue={pin}
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

const polaFormularza: IPolaFormularza<Karta_Orlen_Insert_Input> = {
  id: "id",
  id_auto: "id_auto",
  pin: "pin",
  data_waznosci: "data_waznosci",
};
export default CardKartaOrlen;
