import {
  CheckboxField,
  DateField,
  NumberField,
  SelectField,
} from "@COMPONENTS/universal-components/Forms";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import IOptionSelect from "@UTILS/IOptionSelect";
import {
  IPropertiesFlatter,
  IPropertiesFlatterWithPrefix,
} from "@UTILS/IPolaFormularza";
import dayjs from "dayjs";
import {
  Przeglad,
  Przeglad_Insert_Input,
  Przeglad_Koszta_Dodatkowe_Insert_Input,
  Przeglad_Ot_Kilometry,
  UpdatePrzegladByPkMutationVariables,
  useGetAllPrzegladyOtKilometryQuery,
  useUpdatePrzegladByPkMutation,
} from "generated/graphql";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { CellProps } from "react-table";
import { EditCell, IEditFormProps } from "./editForms";

interface IEditThisFromProps extends IEditFormProps {
  cell: CellProps<Przeglad, number>;
}

export const PrzegladyEditForm = ({
  triggerAction,
  setTriggerAction,
  cell,
}: IEditThisFromProps) => {
  useEffect(() => {
    triggerAction && triggerSubmit();
  }, [triggerAction]);

  const router = useRouter();
  const [update] = useUpdatePrzegladByPkMutation();
  const {
    id,
    id_przeglad_koszta_dodatkowe,
    data_przegladu,
    id_przeglad_ot_kilometry,
    is_wymiana_rozrzadu,
    Przeglad_OT_Kilometry: { id: idOtKilometry },
    Przeglad_Koszta_Dodatkowe: {
      id: idPrzegladKosztaDodatkowe,
      koszt_klimatyzacja,
      koszt_sprzeglo,
      koszt_hamulce,
      koszt_rozrzad,
      koszt_MacPhersona,
    },
  } = cell.cell.row.original;
  const { loading, data: otData } = useGetAllPrzegladyOtKilometryQuery();
  const refSubmitButtom = useRef<HTMLButtonElement>(null);

  // console.log(id_przeglad_ot_kilometry, `id przegląd kilometry`);

  const {
    control,
    register,
    handleSubmit,
  } = useForm<UpdatePrzegladByPkMutationVariables>({
    defaultValues: { id },
  });

  const triggerSubmit = () => {
    setTriggerAction(!triggerAction);
    // refForm.current!.dispatchEvent(new Event("submit", { cancelable: true }));
    refSubmitButtom.current?.click();
  };

  const submitHandler = async (data: UpdatePrzegladByPkMutationVariables) => {
    console.log(data);

    const { data: dataReturned } = await update({
      variables: {
        ...data,
      },
    });

    router.push(`/lista/auto/${dataReturned?.update_Przeglad_by_pk?.id_auto}`);

    // data.data_oddania_auta = data.data_oddania_auta || null;
    // const { data: dataReturned } = await update({ variables: { id, data } });
  };

  if (loading) {
    return (
      <>
        <LoaderNoDash />
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <DateField
          name={polaFormularza.data?.data_przegladu! as string}
          placeholder={"Podaj datę przeglądu"}
          control={control}
          tytul={"Data wykonania przeglądu"}
          defaultValue={dayjs(data_przegladu).format("YYYY-MM-DD")}
          required={true}
        />

        <SelectField
          control={control}
          name={polaFormularza.data.id_przeglad_ot_kilometry!}
          placeholder={"Kilometry"}
          tytul={"Kilometry"}
          required={true}
          options={getOptionsPrzegladOtKilometry(
            otData?.Przeglad_OT_Kilometry!
          )}
          defaultValue={id_przeglad_ot_kilometry}
        />

        <NumberField
          control={control}
          name={polaFormularza.dataPrzegladKosztaDodatkowe.koszt_MacPhersona!}
          tytul={"Koszt MacPhersona"}
          defaultValue={koszt_MacPhersona}
          placeholder={"Podaj koszt MacPhersonów"}
          required
        />

        <NumberField
          control={control}
          name={polaFormularza.dataPrzegladKosztaDodatkowe.koszt_hamulce!}
          tytul={"Koszt Hamulców"}
          defaultValue={koszt_hamulce}
          placeholder={"Podaj koszt hamulców"}
          required
        />

        <NumberField
          control={control}
          name={polaFormularza.dataPrzegladKosztaDodatkowe.koszt_klimatyzacja!}
          tytul={"Koszt klimatyzacji"}
          defaultValue={koszt_klimatyzacja}
          required
          placeholder={"Podaj klimatyzacji"}
        />

        <NumberField
          control={control}
          name={polaFormularza.dataPrzegladKosztaDodatkowe.koszt_rozrzad!}
          tytul={"Koszt rozrządu"}
          defaultValue={koszt_rozrzad}
          placeholder={"Podaj koszt rozrządu"}
          required
        />

        <NumberField
          control={control}
          name={polaFormularza.dataPrzegladKosztaDodatkowe.koszt_sprzeglo!}
          tytul={"Koszt sprzęgła"}
          defaultValue={koszt_sprzeglo}
          placeholder={"Podaj koszt sprzęgła"}
          required
        />

        <CheckboxField
          control={control}
          name={polaFormularza.data.is_wymiana_rozrzadu!}
          tytul={"Czy wymieniano rozrząd?"}
          defaultValue={is_wymiana_rozrzadu}
        />

        <input
          name={polaFormularza.id}
          ref={register({ valueAsNumber: true })}
          value={id}
          onChange={() => {}}
          hidden={true}
          type={"number"}
        />

        <input
          name={polaFormularza.idPrzegladKosztaDodatkowe}
          ref={register({ valueAsNumber: true })}
          value={id_przeglad_koszta_dodatkowe}
          onChange={() => {}}
          hidden={true}
          type={"number"}
        />

        <button hidden={true} ref={refSubmitButtom} type={"submit"} />
      </form>
    </>
  );
};

const EditPrzegladyComponent = (cell: any) => {
  return <EditCell EditForm={PrzegladyEditForm} cell={cell} />;
};
export default EditPrzegladyComponent;

const polaFormularzaPrzeglad: IPropertiesFlatterWithPrefix<
  Przeglad_Insert_Input,
  "",
  "data."
> = {
  data_przegladu: "data.data_przegladu",
  id_auto: "data.id_auto",
  is_wymiana_rozrzadu: "data.is_wymiana_rozrzadu",
  id_przeglad_koszta_dodatkowe: "data.id_przeglad_koszta_dodatkowe",
  id_przeglad_ot_kilometry: "data.id_przeglad_ot_kilometry",
  id: "data.id",
};

const polaFormularzaKoszta: IPropertiesFlatterWithPrefix<
  Przeglad_Koszta_Dodatkowe_Insert_Input,
  "",
  "dataPrzegladKosztaDodatkowe."
> = {
  koszt_MacPhersona: "dataPrzegladKosztaDodatkowe.koszt_MacPhersona",
  koszt_hamulce: "dataPrzegladKosztaDodatkowe.koszt_hamulce",
  id: "dataPrzegladKosztaDodatkowe.id",
  koszt_klimatyzacja: "dataPrzegladKosztaDodatkowe.koszt_klimatyzacja",
  koszt_rozrzad: "dataPrzegladKosztaDodatkowe.koszt_rozrzad",
  koszt_sprzeglo: "dataPrzegladKosztaDodatkowe.koszt_sprzeglo",
};

const polaFormularza: IPropertiesFlatter<UpdatePrzegladByPkMutationVariables> = {
  data: {
    data_przegladu: "data.data_przegladu",
    is_wymiana_rozrzadu: "data.is_wymiana_rozrzadu",
    id_przeglad_koszta_dodatkowe: "data.id_przeglad_koszta_dodatkowe",
    id_przeglad_ot_kilometry: "data.id_przeglad_ot_kilometry",
  },
  id: "id",
  idPrzegladKosztaDodatkowe: "idPrzegladKosztaDodatkowe",
  dataPrzegladKosztaDodatkowe: {
    id: "dataPrzegladKosztaDodatkowe.id",
    koszt_MacPhersona: "dataPrzegladKosztaDodatkowe.koszt_MacPhersona",
    koszt_hamulce: "dataPrzegladKosztaDodatkowe.koszt_hamulce",
    koszt_klimatyzacja: "dataPrzegladKosztaDodatkowe.koszt_klimatyzacja",
    koszt_rozrzad: "dataPrzegladKosztaDodatkowe.koszt_rozrzad",
    koszt_sprzeglo: "dataPrzegladKosztaDodatkowe.koszt_sprzeglo",
  },
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

const polaFormularzav2 = {
  polaFormularzaPrzeglad,
  polaFormularzaKoszta,
};
