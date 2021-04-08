import { PlusCircleFilled } from "@ant-design/icons";
import { IPolaFormularza } from "@UTILS/IPolaFormularza";
import {
  CardExtented,
  CardItem,
} from "@COMPONENTS/universal-components/CardExtended";
import {
  DateField,
  SelectField,
  TextField,
} from "@COMPONENTS/universal-components/Forms";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import {
  Grupa_Aut_Klienta,
  Grupa_Aut_Klienta_Inc_Input,
  Grupa_Aut_Klienta_Insert_Input,
  Klient,
  useAddGrupaAutKlientaMutation,
  useGetAllKlientQuery,
  useGetGrupaAutKlientaForAutoQuery,
  useGetPolisaForAutoQuery,
  useUpdateGrupaAutKlientaByPkMutation,
  useUpdatePolisaByPkMutation,
} from "generated/graphql";
import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "antd";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import { IGetOptions } from "@UTILS/IOptionSelect";

interface ICardProps {
  idAuto: number;
}

export const Card: FC<ICardProps> = ({ idAuto }) => {
  const { data, loading, error } = useGetGrupaAutKlientaForAutoQuery({
    variables: { id_auto: idAuto },
  });

  const [idField, setIdField] = useState<number>();
  const [idAutoField, setIdAutoField] = useState<number>();
  const [idKliendField, setIdKliendField] = useState<number>();
  const [klientNazwaField, setKlientNazwaField] = useState<string>();
  const [klientKontaktField, setKlientKontaktField] = useState<string>();

  useEffect(() => {
    if (!loading && !error) {
      setIdField(data?.Grupa_Aut_Klienta[0]?.id);
      setIdAutoField(data?.Grupa_Aut_Klienta[0]?.id_auto);
      setIdKliendField(data?.Grupa_Aut_Klienta[0]?.id_klient);
      setKlientNazwaField(data?.Grupa_Aut_Klienta[0]?.Klient.nazwa);
      setKlientKontaktField(data?.Grupa_Aut_Klienta[0]?.Klient.kontakt);

      // setNrPolisyField(data?.Polisa[0]?.nr_polisy);
      // setUbezpieczycielField(data?.Polisa[0]?.ubezpieczyciel);
      // setDataRozpoczeciaPolisyField(data?.Polisa[0]?.data_rozpoczecia_polisy);
      // setAcOcField(data?.Polisa[0]?.ac_oc);
    }
  }, [loading]);

  if (loading) {
    <LoaderNoDash />;
  }
  return (
    <CardExtented
      isDataChecker={
        data?.Grupa_Aut_Klienta.length !== 0 || undefined ? true : false
      }
      cardProps={{
        title: "Klient",
      }}
      AddComponent={
        <AddComponent {...data?.Grupa_Aut_Klienta!} id_auto={idAuto} />
      }
      EditComponent={
        <EditComponent {...data?.Grupa_Aut_Klienta[0]} id_auto={idAuto} />
      }>
      <CardItem label={"Id"} content={idKliendField} />
      <CardItem label={"Nazwa"} content={klientNazwaField} />
      <CardItem label={"Kontakt"} content={klientKontaktField} />
    </CardExtented>
  );
};

const AddComponent = ({
  id,
  id_auto,
  id_klient,
}: Grupa_Aut_Klienta_Insert_Input) => {
  const { data, loading } = useGetAllKlientQuery();

  const [add] = useAddGrupaAutKlientaMutation();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    register,
  } = useForm<Grupa_Aut_Klienta_Insert_Input>({
    defaultValues: { id_auto },
  });

  const submitHandler = async (data: Grupa_Aut_Klienta_Insert_Input) => {
    // console.log(data);
    const { data: dataReturned } = await add({ variables: { data } });
    router.push(
      `/lista/auto/${dataReturned?.insert_Grupa_Aut_Klienta_one?.id_auto}`
    );
  };

  if (loading) {
    return <LoaderNoDash />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <SelectField
          control={control}
          name={polaFormularza.id_klient!}
          placeholder={"Wybierz klienta"}
          tytul={"Klient"}
          options={getOptionsKlient(data?.Klient!)}
          defaultValue={id_klient}
          required
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

interface IEditProps {
  id_klient: number;
}
const EditComponent = ({
  id,
  id_auto,
  id_klient,
}: Grupa_Aut_Klienta_Inc_Input) => {
  const { data, loading } = useGetAllKlientQuery();
  const [update] = useUpdateGrupaAutKlientaByPkMutation();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    register,
  } = useForm<Grupa_Aut_Klienta_Insert_Input>({
    defaultValues: { id_auto },
  });

  const submitHandler = async (data: Grupa_Aut_Klienta_Insert_Input) => {
    // console.log(data, "submitHandler");
    const { data: dataReturned } = await update({
      variables: { id: id!, data },
    });
    router.push(
      `/lista/auto/${dataReturned?.update_Grupa_Aut_Klienta_by_pk?.id_auto}`
    );
  };

  if (loading) {
    return <LoaderNoDash />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <SelectField
          control={control}
          name={polaFormularza.id_klient!}
          placeholder={"Wybierz klienta"}
          tytul={"Klient"}
          options={getOptionsKlient(data?.Klient!)}
          defaultValue={id_klient}
          required
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
export default Card;

const getOptionsKlient: IGetOptions<Klient> = (data) => {
  return data.map((item) => {
    return {
      label: `${item?.nazwa}`,
      value: item?.id,
    };
  });
};

export const polaFormularza: IPolaFormularza<Grupa_Aut_Klienta_Insert_Input> = {
  id: "id",
  id_auto: "id_auto",
  id_klient: "id_klient",
  created_at: "created_at",
};
