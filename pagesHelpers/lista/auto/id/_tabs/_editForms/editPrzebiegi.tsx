import { DateField, NumberField } from "@COMPONENTS/universal-components/Forms";
import { IPropertiesFlatter } from "@UTILS/IPolaFormularza";
import {
  useUpdatePrzebiegiByPkMutation,
  UpdatePrzebiegiByPkMutationVariables,
  Przebieg,
} from "generated/graphql";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { CellProps } from "react-table";
import { EditCell, IEditFormProps } from "./editForms";

interface IEditThisFromProps extends IEditFormProps {
  cell: CellProps<Przebieg, number>;
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
  const [update] = useUpdatePrzebiegiByPkMutation();
  const { id, data_przebiegu, przebieg, id_auto } = cell.cell.row.original;

  const refSubmitButtom = useRef<HTMLButtonElement>(null);

  const {
    control,
    register,
    handleSubmit,
  } = useForm<UpdatePrzebiegiByPkMutationVariables>({
    defaultValues: { id },
  });

  const triggerSubmit = () => {
    setTriggerAction(!triggerAction);
    refSubmitButtom.current?.click();
  };

  const submitHandler = async (data: UpdatePrzebiegiByPkMutationVariables) => {
    console.log(data);

    const { data: dataReturned } = await update({
      variables: {
        ...data,
        id,
      },
    });

    router.push(`/lista/auto/${dataReturned?.update_Przebieg_by_pk?.id_auto}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <NumberField
          control={control}
          name={polaFormularza.data.przebieg!}
          tytul={"Przebieg"}
          defaultValue={przebieg}
          placeholder={"Podaj przebieg"}
          required
        />

        <DateField
          control={control}
          name={polaFormularza.data.data_przebiegu! as string}
          tytul={"Data przebiegu"}
          defaultValue={data_przebiegu}
          placeholder={"Podaj datę przebiegu"}
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

        <button hidden={true} ref={refSubmitButtom} type={"submit"} />
      </form>
    </>
  );
};

const EditPrzebiegiComponent = (cell: any) => {
  return <EditCell EditForm={SzkodyEditForm} cell={cell} />;
};
export default EditPrzebiegiComponent;

const polaFormularza: IPropertiesFlatter<UpdatePrzebiegiByPkMutationVariables> = {
  id: "id",
  data: {
    id_auto: "data.id_auto",
    przebieg: "data.przebieg",
    data_przebiegu: "data.data_przebiegu",
  },
};
