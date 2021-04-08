import { DateField, SelectField } from "@COMPONENTS/universal-components/Forms";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import { IGetOptions } from "@UTILS/IOptionSelect";
import { IPolaFormularza } from "@UTILS/IPolaFormularza";
import dayjs from "dayjs";
import {
  Historia_Uzytkownik_Auto,
  Historia_Uzytkownik_Auto_Insert_Input,
  useGetAllUzytkownikQuery,
  useUpdateHistoriaByPkMutation,
  Uzytkownik,
} from "generated/graphql";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { CellProps } from "react-table";
import { EditCell, IEditFormProps } from "./editForms";

interface IEditHistoriaUzytkownikowFormProps extends IEditFormProps {
  cell: CellProps<Historia_Uzytkownik_Auto, number>;
}

export const HistoriaEditForm = ({
  triggerAction,
  setTriggerAction,
  cell,
}: IEditHistoriaUzytkownikowFormProps) => {
  useEffect(() => {
    triggerAction && triggerSubmit();
  }, [triggerAction]);

  const router = useRouter();
  const [update] = useUpdateHistoriaByPkMutation();
  const {
    id,
    id_uzytkownik,
    data_dodania_wlasciciela,
    data_oddania_auta,
  } = cell.cell.row.original;
  const { loading, data: userData } = useGetAllUzytkownikQuery();
  const refSubmitButtom = useRef<HTMLButtonElement>(null);

  const {
    control,
    handleSubmit,
  } = useForm<Historia_Uzytkownik_Auto_Insert_Input>({
    defaultValues: { id },
  });

  const triggerSubmit = () => {
    setTriggerAction(!triggerAction);
    // refForm.current!.dispatchEvent(new Event("submit", { cancelable: true }));
    refSubmitButtom.current?.click();
  };

  const submitHandler = async (data: Historia_Uzytkownik_Auto_Insert_Input) => {
    data.data_oddania_auta = data.data_oddania_auta || null;
    const { data: dataReturned } = await update({ variables: { id, data } });
    router.push(
      `/lista/auto/${dataReturned?.update_Historia_Uzytkownik_Auto_by_pk?.id_auto}`
    );
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
          name={polaFormularza.data_dodania_wlasciciela}
          placeholder={"Podaj datę dodania właściciela"}
          control={control}
          tytul={"Data dodania właściciela"}
          defaultValue={dayjs(data_dodania_wlasciciela).format("YYYY-MM-DD")}
          required={true}
        />

        <DateField
          name={polaFormularza.data_oddania_auta}
          placeholder={"Podaj datę zdania auta"}
          control={control}
          tytul={"Data zdania auta"}
          defaultValue={
            data_oddania_auta
              ? dayjs(data_oddania_auta).format("YYYY-MM-DD")
              : dayjs().format("YYYY-MM-DD")
          }
          required={false}
        />
        <SelectField
          control={control}
          name={polaFormularza.id_uzytkownik}
          placeholder={"Wybierz użytkownika"}
          tytul={"Użytkownik"}
          required={true}
          options={getOptionsUzytkownik(userData?.Uzytkownik!)}
          defaultValue={id_uzytkownik}
        />

        <button hidden={true} ref={refSubmitButtom} type={"submit"} />
      </form>
    </>
  );
};

const EditHistoriaUzytkownikowComponent = (cell: any) => {
  return <EditCell EditForm={HistoriaEditForm} cell={cell} />;
};
export default EditHistoriaUzytkownikowComponent;

const polaFormularza: IPolaFormularza<Historia_Uzytkownik_Auto_Insert_Input> = {
  id: "id",
  id_auto: "id_auto",
  data_dodania_wlasciciela: "data_dodania_wlasciciela",
  data_oddania_auta: "data_oddania_auta",
  id_uzytkownik: "id_uzytkownik",
};

const getOptionsUzytkownik: IGetOptions<Uzytkownik> = (data) => {
  return data.map((item) => {
    return {
      label: `${item?.imie} ${item?.nazwisko}`,
      value: item?.id,
    };
  });
};
