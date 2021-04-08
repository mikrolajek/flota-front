import {
  DateField,
  NumberField,
  SelectField,
  TextAreaField,
  TextField,
} from "@COMPONENTS/universal-components/Forms";
import { LoaderNoDash } from "@COMPONENTS/universal-components/Loaders";
import IOptionSelect from "@UTILS/IOptionSelect";
import { IPropertiesFlatter } from "@UTILS/IPolaFormularza";
import dayjs from "dayjs";
import {
  UpdateOponaByPkMutationVariables,
  Opona,
  Typy_Opon,
  useGetAllTypyOponQuery,
  useUpdateOponaByPkMutation,
} from "generated/graphql";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { CellProps } from "react-table";
import { EditCell, IEditFormProps } from "./editForms";

interface IEditThisFromProps extends IEditFormProps {
  cell: CellProps<Opona, number>;
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
  const [update] = useUpdateOponaByPkMutation();
  const {
    id,
    detale,
    data_zakupu,
    firma,
    id_typy_opon,
    koszt,
    rozmiar,
    id_auto,
  } = cell.cell.row.original;

  const { loading, data: dataTypy } = useGetAllTypyOponQuery();
  const refSubmitButtom = useRef<HTMLButtonElement>(null);

  // console.log(id_przeglad_ot_kilometry, `id przegląd kilometry`);

  const {
    control,
    register,
    handleSubmit,
  } = useForm<UpdateOponaByPkMutationVariables>({
    defaultValues: { id },
  });

  const triggerSubmit = () => {
    setTriggerAction(!triggerAction);
    // refForm.current!.dispatchEvent(new Event("submit", { cancelable: true }));
    refSubmitButtom.current?.click();
  };

  const submitHandler = async (data: UpdateOponaByPkMutationVariables) => {
    console.log(data);

    const { data: dataReturned } = await update({
      variables: {
        ...data,
        id,
      },
    });

    router.push(`/lista/auto/${dataReturned?.update_Opona_by_pk?.id_auto}`);
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
          name={polaFormularza.data.data_zakupu as string}
          placeholder={"Podaj datę zakupu"}
          control={control}
          tytul={"Data zakupu"}
          defaultValue={dayjs(data_zakupu).format("YYYY-MM-DD")}
          required={true}
        />

        <SelectField
          control={control}
          name={polaFormularza.data.id_typy_opon!}
          placeholder={"Typ opony"}
          tytul={"Typ opony"}
          required={true}
          options={getOptionsTypyOpon(dataTypy?.Typy_Opon!)}
          defaultValue={id_typy_opon}
        />

        <NumberField
          control={control}
          name={polaFormularza.data.koszt!}
          tytul={"Koszt opon"}
          defaultValue={koszt}
          placeholder={"Podaj koszt opon"}
          required
        />

        <TextField
          control={control}
          name={polaFormularza.data.rozmiar!}
          tytul={"Rozmiar opon"}
          defaultValue={rozmiar}
          placeholder={"Podaj rozmiar opon"}
          required
        />

        <TextField
          control={control}
          name={polaFormularza.data.firma!}
          tytul={"Firma opon"}
          defaultValue={firma}
          placeholder={"Podaj firmę opon"}
          required
        />

        <TextAreaField
          control={control}
          name={polaFormularza.data.detale!}
          tytul={"Detale"}
          defaultValue={detale}
          required
          placeholder={"Detale"}
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
  return <EditCell EditForm={PrzegladyEditForm} cell={cell} />;
};
export default EditOponaComponent;

const polaFormularza: IPropertiesFlatter<UpdateOponaByPkMutationVariables> = {
  id: "id",
  data: {
    data_zakupu: "data.data_zakupu",
    id_auto: "data.id_auto",
    detale: "data.detale",
    firma: "data.firma",
    id_typy_opon: "data.id_typy_opon",
    koszt: "data.koszt",
    rozmiar: "data.rozmiar",
  },
};

const getOptionsTypyOpon = (data: Partial<Typy_Opon>[]): IOptionSelect[] => {
  return data.map((item) => {
    return {
      label: `${item?.nazwa_typu}`,
      value: item?.id,
    };
  });
};

interface glebokiObiekt {
  uuu: {
    jaki: string;
    on: {
      jest: {
        gleboki: string;
      };
      bardzo: {
        bardzooo: {
          gleboki: string;
        };
      };
    };
  };
}

const glebokoMu: IPropertiesFlatter<glebokiObiekt> = {
  uuu: {
    jaki: "uuu.jaki",
    on: {
      jest: {
        gleboki: "uuu.on.jest.gleboki",
      },
      bardzo: {
        bardzooo: {
          gleboki: "uuu.on.bardzo.bardzooo.gleboki",
        },
      },
    },
  },
};
