import {
  SelectField,
  TextAreaField,
  TextField,
} from "@COMPONENTS/universal-components/Forms";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import IOptionSelect from "@UTILS/IOptionSelect";
import { IPropertiesFlatter } from "@UTILS/IPolaFormularza";
import {
  useUpdateSzkodyByPkMutation,
  Szkoda,
  useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery,
  useGetAllStatusSzkodyQuery,
  UpdateSzkodyByPkMutationVariables,
  Status_Szkody,
  Uzytkownik,
} from "generated/graphql";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { CellProps } from "react-table";
import { EditCell, IEditFormProps } from "./editForms";

interface IEditThisFromProps extends IEditFormProps {
  cell: CellProps<Szkoda, number>;
}

export const SzkodyEditForm = ({
  triggerAction,
  setTriggerAction,
  cell,
}: IEditThisFromProps) => {
  useEffect(() => {
    triggerAction && triggerSubmit();
  }, [triggerAction]);

  const router = useRouter();
  const [update] = useUpdateSzkodyByPkMutation();
  const {
    id,
    adres,
    id_status_szkody,
    id_uzytkownik,
    opis_szkody,
    uszkodzenia,
    id_auto,
  } = cell.cell.row.original;

  const {
    data: dataUzytkownik,
    loading,
  } = useGetUzytkownikFromHistoriaUzytkownikAutoForAutoQuery({
    variables: { id_auto: id_auto! },
  });

  const {
    data: dataStatusSzkody,
    loading: loadingStatusSzkody,
  } = useGetAllStatusSzkodyQuery();

  const refSubmitButtom = useRef<HTMLButtonElement>(null);

  const {
    control,
    register,
    handleSubmit,
  } = useForm<UpdateSzkodyByPkMutationVariables>({
    defaultValues: { id },
  });

  const triggerSubmit = () => {
    setTriggerAction(!triggerAction);
    refSubmitButtom.current?.click();
  };

  const submitHandler = async (data: UpdateSzkodyByPkMutationVariables) => {
    console.log(data);

    const { data: dataReturned } = await update({
      variables: {
        ...data,
        id,
      },
    });

    router.push(`/lista/auto/${dataReturned?.update_Szkoda_by_pk?.id_auto}`);
  };

  if (loading || loadingStatusSzkody) {
    return (
      <>
        <LoaderNoDash />
      </>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <SelectField
          control={control}
          name={polaFormularza.data.id_status_szkody!}
          placeholder={"Status szkody"}
          tytul={"Status szkody"}
          required={true}
          options={getOptionsStatusSzkody(dataStatusSzkody?.Status_Szkody!)}
          defaultValue={id_status_szkody}
        />

        <SelectField
          control={control}
          name={polaFormularza.data.id_uzytkownik!}
          placeholder={"Kierowca szkody"}
          tytul={"Kierowca"}
          required={true}
          options={getOptionsUzytkownik(dataUzytkownik?.Uzytkownik!)}
          defaultValue={id_uzytkownik}
        />

        <TextField
          control={control}
          name={polaFormularza.data.adres!}
          tytul={"Adres"}
          defaultValue={adres}
          placeholder={"Podaj adres"}
          required
        />

        <TextField
          control={control}
          name={polaFormularza.data.uszkodzenia!}
          tytul={"Uszkodzenia"}
          defaultValue={uszkodzenia}
          placeholder={"Podaj uszkodzenia"}
          required
        />

        <TextAreaField
          control={control}
          name={polaFormularza.data.opis_szkody!}
          tytul={"Opis szkody"}
          defaultValue={opis_szkody}
          placeholder={"Podaj opis szkody"}
          required
        />

        {/* Hidden inputs */}
        <input
          name={polaFormularza.id}
          ref={register({ valueAsNumber: true })}
          value={id}
          onChange={() => {}}
          hidden={true}
          type={"number"}
        />

        <input
          name={polaFormularza.data.id_auto}
          ref={register({ valueAsNumber: true })}
          value={id_auto}
          onChange={() => {}}
          hidden={true}
          type={"number"}
        />

        <button hidden={true} ref={refSubmitButtom} type={"submit"} />
      </form>
    </>
  );
};

const EditOponaComponent = (cell: any) => {
  return <EditCell EditForm={SzkodyEditForm} cell={cell} />;
};
export default EditOponaComponent;

const polaFormularza: IPropertiesFlatter<UpdateSzkodyByPkMutationVariables> = {
  id: "id",
  data: {
    adres: "data.adres",
    id_status_szkody: "data.id_status_szkody",
    id_auto: "data.id_auto",
    opis_szkody: "data.opis_szkody",
    uszkodzenia: "data.uszkodzenia",
    id_uzytkownik: "data.id_uzytkownik",
  },
};

const getOptionsStatusSzkody: IOptionSelector<Status_Szkody> = (data) => {
  return data.map((item) => {
    return {
      label: `${item?.nazwa_statusu}`,
      value: item?.id,
    };
  });
};

const getOptionsUzytkownik: IOptionSelector<Uzytkownik> = (data) => {
  return data.map((item) => {
    return {
      label: `${item?.imie} ${item?.nazwisko}`,
      value: item?.id,
    };
  });
};

type IOptionSelector<T = {}> = (data: Partial<T>[]) => IOptionSelect[];
