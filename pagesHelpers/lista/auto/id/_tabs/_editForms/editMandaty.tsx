import {
  DateField,
  NumberField,
  SelectField,
  TextField,
} from "@COMPONENTS/universal-components/Forms";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import { IGetOptions } from "@UTILS/IOptionSelect";
import { IPropertiesFlatter } from "@UTILS/IPolaFormularza";
import {
  Uzytkownik,
  Mandat,
  useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery,
  UpdateMandatByPkMutationVariables,
  useUpdateMandatByPkMutation,
} from "generated/graphql";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { CellProps } from "react-table";
import { EditCell, IEditFormProps } from "./editForms";

interface IEditThisFromProps extends IEditFormProps {
  cell: CellProps<Mandat, number>;
}

export const MandatyEditForm = ({
  triggerAction,
  setTriggerAction,
  cell,
}: IEditThisFromProps) => {
  useEffect(() => {
    triggerAction && triggerSubmit();
  }, [triggerAction]);

  const router = useRouter();
  const [update] = useUpdateMandatByPkMutation();
  const {
    id,
    id_auto,
    dzialanie,
    id_uzytkownik,
    data_odpowiedzi,
    data_otrzymania,
    data_pisma,
    data_zdarzenia,
    wysokosc_mandatu,
    nadawca,
    nr_sprawy,
    obciazenie_za_mandat,
    platnosc,
  } = cell.cell.row.original;

  const refSubmitButtom = useRef<HTMLButtonElement>(null);

  const {
    data,
    loading,
  } = useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery({
    variables: { id_auto: id_auto! },
  });

  const {
    control,
    register,
    handleSubmit,
  } = useForm<UpdateMandatByPkMutationVariables>({
    defaultValues: { id },
  });

  const triggerSubmit = () => {
    setTriggerAction(!triggerAction);
    refSubmitButtom.current?.click();
  };

  const submitHandler = async (data: UpdateMandatByPkMutationVariables) => {
    console.log(data);

    const { data: dataReturned } = await update({
      variables: {
        ...data,
        id,
      },
    });

    router.push(`/lista/auto/${dataReturned?.update_Mandat_by_pk?.id_auto}`);
  };

  if (loading) {
    return <LoaderNoDash />;
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <DateField
          name={polaFormularza.data.data_pisma as string}
          placeholder={"Podaj datę pisma"}
          control={control}
          tytul={"Data pisma"}
          defaultValue={data_pisma}
          required={true}
        />
        <DateField
          name={polaFormularza.data.data_zdarzenia as string}
          placeholder={"Podaj datę zdarzenia"}
          control={control}
          tytul={"Data zdarzenia"}
          defaultValue={data_zdarzenia}
          required={true}
        />
        <DateField
          name={polaFormularza.data.data_otrzymania as string}
          placeholder={"Podaj datę otrzymania"}
          control={control}
          tytul={"Data otrzymania"}
          defaultValue={data_otrzymania}
          required={true}
        />
        <DateField
          name={polaFormularza.data.data_odpowiedzi as string}
          placeholder={"Podaj datę odpowiedzi"}
          control={control}
          tytul={"Data odpowiedzi"}
          defaultValue={data_odpowiedzi}
          required={false}
        />

        <NumberField
          control={control}
          name={polaFormularza.data.platnosc!}
          tytul={"Płatność"}
          defaultValue={platnosc}
          required
          placeholder={"Podaj koszt płatności"}
        />

        <NumberField
          control={control}
          name={polaFormularza.data.wysokosc_mandatu!}
          tytul={"Wysokość mandatu"}
          defaultValue={wysokosc_mandatu}
          required
          placeholder={"Podaj wysokość mandatu"}
        />

        <NumberField
          control={control}
          name={polaFormularza.data.obciazenie_za_mandat!}
          tytul={"Obciążenie za mandat"}
          defaultValue={obciazenie_za_mandat}
          required
          placeholder={"Podaj obciążenie za mandat"}
        />

        <TextField
          control={control}
          name={polaFormularza.data.nadawca!}
          tytul={"Nadawca"}
          defaultValue={nadawca}
          required
          placeholder={"Podaj nadawcę"}
        />

        <TextField
          control={control}
          name={polaFormularza.data.nr_sprawy!}
          tytul={"Numer sprawy"}
          defaultValue={nr_sprawy}
          required
          placeholder={"Podaj numer sprawy"}
        />

        <TextField
          control={control}
          name={polaFormularza.data.dzialanie!}
          tytul={"Działanie"}
          defaultValue={dzialanie}
          required
          placeholder={"Podaj działanie"}
        />

        <SelectField
          control={control}
          name={polaFormularza.data.id_uzytkownik!}
          placeholder={"Wybierz kierowce"}
          tytul={"Kierowca"}
          required
          defaultValue={id_uzytkownik}
          options={getOptionsUzytkownik(data?.Uzytkownik!)}
        />

        {/* Hidden inputs */}

        <input
          name={polaFormularza.data.id_auto}
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

        <button hidden={true} ref={refSubmitButtom} type={"submit"} />
      </form>
    </>
  );
};

const EditMandatyComponent = (cell: any) => {
  return <EditCell EditForm={MandatyEditForm} cell={cell} />;
};
export default EditMandatyComponent;

// UpdateMandatByPKMutationVariables

const polaFormularza: IPropertiesFlatter<UpdateMandatByPkMutationVariables> = {
  id: "id",
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
