import React from "react";
import LayoutM from "@COMPONENTS/universal-components/LayoutM";
import { Button } from "antd";
import { SelectedPanelField } from "@UTILS/selectedPanel";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { PlusCircleFilled } from "@ant-design/icons";
import {
  CardPanel,
  FormFlex,
  FormItem,
} from "@COMPONENTS/styledComponents/components";
import {
  useAddUzytkownikMutation,
  Uzytkownik_Insert_Input,
} from "generated/graphql";
import { NumberField, TextField } from "@COMPONENTS/universal-components/Forms";
import { IPolaFormularza } from "@UTILS/IPolaFormularza";

const Uzytkownik = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<Uzytkownik_Insert_Input>();

  const [addUzytkownik] = useAddUzytkownikMutation();

  const submitHandler = async (data: Uzytkownik_Insert_Input) => {
    // console.log(data);
    const { data: dataReturned } = await addUzytkownik({
      variables: { data: data },
    });

    router.push(`/lista/uzytkonik/${dataReturned?.insert_Uzytkownik_one?.id}`);
  };

  return (
    <LayoutM
      flexCenter={true}
      selectedField={SelectedPanelField.DODAJ_UZYTKOWNIK}>
      <CardPanel>
        <h1>Dodaj nowego użytkownika</h1>
        <FormFlex
          style={{ maxWidth: "100%", minWidth: "30vw" }}
          onSubmit={handleSubmit(submitHandler)}>
          <TextField
            name={polaFormularza.imie}
            placeholder={"Podaj imię"}
            required={true}
            tytul={"Imię"}
            control={control}
          />

          <TextField
            name={polaFormularza.nazwisko}
            placeholder={"Podaj nazwisko"}
            required={true}
            tytul={"Nazwisko"}
            control={control}
          />

          <NumberField
            name={polaFormularza.pesel}
            placeholder={"Podaj pesel"}
            required={true}
            tytul={"Pesel"}
            control={control}
            defaultValue={0}
          />

          <TextField
            name={polaFormularza.email}
            placeholder={"Podaj email"}
            required={false}
            tytul={"Email"}
            control={control}
          />

          <TextField
            name={polaFormularza.miasto}
            placeholder={"Podaj miasto"}
            required={true}
            tytul={"Miasto"}
            control={control}
          />

          <TextField
            name={polaFormularza.telefon}
            placeholder={"Podaj telefon"}
            required={true}
            tytul={"Telefon"}
            control={control}
          />

          <TextField
            name={polaFormularza.numer_prawa_jazdy}
            placeholder={"Podaj numer prawajazdy"}
            required={true}
            tytul={"Prawo jazdy"}
            control={control}
          />

          <FormItem>
            <Button
              icon={<PlusCircleFilled />}
              type="primary"
              htmlType={"submit"}
              size="large">
              Dodaj
            </Button>
          </FormItem>
        </FormFlex>
      </CardPanel>
    </LayoutM>
  );
};
export default Uzytkownik;

const polaFormularza: IPolaFormularza<Uzytkownik_Insert_Input> = {
  email: "email",
  id: "id",
  imie: "imie",
  miasto: "miasto",
  nazwisko: "nazwisko",
  numer_prawa_jazdy: "numer_prawa_jazdy",
  pesel: "pesel",
  telefon: "telefon",
};
