import React, { useState } from "react";
import LayoutM from "@COMPONENTS/universal-components/LayoutM";
import { Button, Checkbox, Input } from "antd";
import selectedField, { SelectedPanelField } from "@UTILS/selectedPanel";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { PlusCircleFilled } from "@ant-design/icons";
import {
  CardPanel,
  FormFlex,
  FormItem,
} from "@COMPONENTS/styledComponents/components";
import { Auto_Insert_Input, useAddAutoMutation } from "generated/graphql";
import { polaFormularza } from "@PAGEHELPERS/dodaj/auto";
import {
  CheckboxField,
  NumberField,
  TextField,
} from "@COMPONENTS/universal-components/Forms";

const Auto = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm<Auto_Insert_Input>();

  const [addAuto] = useAddAutoMutation();

  const submitHandler = async (data: Auto_Insert_Input) => {
    // console.log(data);
    const { data: dataReturned } = await addAuto({
      variables: { data: data },
    });

    router.push(`/lista/auto/${dataReturned?.insert_Auto_one?.id}`);
  };

  return (
    <LayoutM flexCenter={true} selectedField={SelectedPanelField.DODAJ_AUTO}>
      <CardPanel>
        <h1>Dodaj nowe auto</h1>
        <FormFlex
          style={{ maxWidth: "100%", minWidth: "30vw" }}
          onSubmit={handleSubmit(submitHandler)}>
          {/* ######### Marka ######### */}

          <TextField
            name={polaFormularza.marka}
            placeholder={"Podaj nazwę marki"}
            required={true}
            tytul={"Marka"}
            control={control}
          />

          {/* ######### Model ######### */}

          <TextField
            name={polaFormularza.model}
            placeholder={"Podaj nazwę modelu"}
            required={true}
            tytul={"Model"}
            control={control}
          />

          {/* ######### Numer Rejestracyjny ######### */}

          <TextField
            name={polaFormularza.numer_rejestracyjny}
            placeholder={"Podaj numer rejestracyjny"}
            required={true}
            tytul={"Numer rejestracyjny"}
            control={control}
          />

          {/* ######### Numer vin ######### */}

          <TextField
            name={polaFormularza.numer_vin}
            placeholder={"Podaj numer vin"}
            required={true}
            tytul={"Numer vin"}
            control={control}
          />

          {/* ######### Typ paliwa ######### */}

          <TextField
            name={polaFormularza.paliwo}
            placeholder={"Podaj typ paliwa"}
            required={true}
            tytul={"Typ paliwa"}
            control={control}
          />

          {/* ######### Gwarancja ######### */}

          <TextField
            name={polaFormularza.gwarancja}
            placeholder={"Podaj informacje o gwarancji"}
            required={true}
            tytul={"Gwarancja"}
            control={control}
          />

          {/* ######### Rok ######### */}

          <NumberField
            name={polaFormularza.rok_produkcji}
            placeholder={"Podaj rocznik"}
            required={true}
            tytul={"Rocznik"}
            control={control}
            defaultValue={0}
          />

          {/* ######### Stan licznika ######### */}

          <NumberField
            name={polaFormularza.stan_licznika}
            placeholder={"Podaj licznik"}
            required={true}
            tytul={"Licznik"}
            control={control}
            defaultValue={0}
          />

          {/* ######### Czy w użyciu ######### */}
          <CheckboxField
            name={polaFormularza.is_w_uzyciu}
            control={control}
            tytul={"Czy jest w użyciu?"}
            defaultValue={false}
          />

          {/* ######### Uwagi ######### */}

          <TextField
            name={polaFormularza.uwagi}
            placeholder={"Wpisz uwagi"}
            required={true}
            tytul={"Uwagi"}
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
export default Auto;

{
  /* ######### Stanowisko #########

          <FormItem>
            <Label htmlFor="stanowisko">
              <RedStar />
              Stanowisko:
            </Label>
            <Controller
              name="stanowisko"
              id="stanowisko"
              as={<Input />}
              rules={{ required: true }}
              control={control}
              defaultValue={null}
              type="text"
              style={{ width: 200 }}
              placeholder="Podaj nazwe stanowiska"
            />
          </FormItem> */
}
{
  /* <Controller
              name="submitButton"
              control={control}
              style={{ maxWidth: "max-content" }}
              as={<Button> Dodaj </Button>}
              icon={<PlusCircleFilled />}
              htmlType="submit"
              type="primary"
              size="large"
              defaultValue={null}
            /> */
}

{
  /* <FormItem>
            <Label htmlFor="manager">
              <RedStar />
              Manager:
            </Label>
            <Controller
              name="manager"
              id="manager"
              as={<Input />}
              rules={{ required: true }}
              control={control}
              defaultValue={null}
              type="text"
              style={{ width: 200 }}
              placeholder="Podaj imie i nazwisko managera"
            />
          </FormItem> */
}

{
  /* ######### Miasto ######### */
}

{
  /* <FormItem>
            <Label htmlFor="miasto">
              <RedStar />
              Miasto:
            </Label>
            <Controller
              name="miasto"
              id="miasto"
              as={<Input />}
              rules={{ required: true }}
              control={control}
              defaultValue={null}
              type="text"
              style={{ width: 200 }}
              placeholder="Podaj miasto"
            />
          </FormItem> */
}

{
  /* ######### Wojewodztwo ######### */
}

{
  /* <FormItem>
            <Label htmlFor="wojewodztwo">
              <RedStar />
              Wojewodztwo:
            </Label>
            <Controller
              name="wojewodztwo"
              id="wojewodztwo"
              as={<Input />}
              rules={{ required: true }}
              control={control}
              defaultValue={null}
              type="text"
              style={{ width: 200 }}
              placeholder="Podaj wojewodztwo"
            />
          </FormItem> */
}

{
  /* ######### Dni_Pracy ######### */
}

{
  /* <FormItem style={{ flexDirection: "column", alignItems: "center" }}>
            <Label>Dni pracy:</Label>
            <div>
              {optionsDniPracy.map((item, index) => (
                <Controller
                  key={index}
                  render={({ name, onChange }) => {
                    return (
                      <Checkbox
                        style={{ display: "block", marginLeft: "8px" }}
                        name={name}
                        onChange={(e) => onChange(e.target.checked)}>
                        <span
                          // {...item.label == "Niedziela"? (style={color: "red"})
                          {...(item.label == "Niedziela"
                            ? { style: { color: "red", fontWeight: "bold" } }
                            : null)}>
                          {item.label}
                        </span>
                      </Checkbox>
                    );
                  }}
                  name={item.key}
                  defaultValue={false}
                  type="checkbox"
                  control={control}
                />
              ))}
            </div>
          </FormItem> */
}

{
  /* ######### Stawka Godzinowa ######### */
}

{
  /* <FormItem>
            <Label htmlFor="stawka_godzinowa">
              <RedStar />
              Stawka godzinowa:
            </Label>
            <Controller
              name="stawka_godzinowa"
              id="stawka_godzinowa"
              render={({ onChange, value }) => (
                <Input
                  defaultValue={value}
                  onChange={(e) => onChange(parseInt(e.target.value, 10))}
                />
              )}
              rules={{ required: true }}
              control={control}
              defaultValue={18}
              type="number"
              style={{ width: 200 }}
              placeholder="Podaj stawkę godzinową"
            />
          </FormItem> */
}

{
  /* ######### wynagrodzenie_miesieczne ######### */
}
{
  /* 
          <FormItem>
            <Label htmlFor="wynagrodzenie_miesieczne">
              <RedStar />
              Wynagrodzenie miesieczne:
            </Label>
            <Controller
              name="wynagrodzenie_miesieczne"
              id="wynagrodzenie_miesieczne"
              render={({ onChange, value }) => (
                <Input
                  defaultValue={value}
                  onChange={(e) => onChange(parseInt(e.target.value, 10))}
                />
              )}
              rules={{ required: true }}
              control={control}
              defaultValue={2000}
              type="number"
              style={{ width: 200 }}
              placeholder="Podaj wynagrodzenie_miesieczne"
            />
          </FormItem> */
}

{
  /* ######### Start pracy ######### */
}
{
  /* 
          <FormItem>
            <Label htmlFor="start_pracy">
              <RedStar />
              Start pracy:
            </Label>
            <Controller
              name="start_pracy"
              id="start_pracy"
              render={({ onChange, name, onBlur }) => {
                return (
                  <DatePicker
                    defaultValue={moment(
                      dayjs().format("YYYY-MM-DD"),
                      "YYYY-MM-DD"
                    )}
                    format={"YYYY-MM-DD"}
                    onBlur={onBlur}
                    name={name}
                    onChange={(_, dateString) => onChange(dateString)}
                  />
                );
              }}
              defaultValue={moment(dayjs().format("YYYY-MM-DD"), "YYYY-MM-DD")}
              rules={{ required: true }}
              control={control}
              type="date"
              style={{ width: 200 }}
              placeholder="Podaj date startu pracy"
            />
          </FormItem> */
}
