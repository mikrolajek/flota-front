import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import LayoutM from "@COMPONENTS/universal-components/LayoutM";
import { Select, Button, Spin, Input, Checkbox, DatePicker } from "antd";
import selectedField from "@UTILS/selectedPanel";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { PlusCircleFilled } from "@ant-design/icons";
import {
  INSERT_REKRUTACJA_BIURO,
  INSERT_REKRUTACJA_HOSTESSA_TK,
} from "@GQL/mutations";
import {
  CardPanel,
  FormFlex,
  FormItem,
} from "@COMPONENTS/styledComponents/components";
import dayjs from "dayjs";
import moment from "moment";
import { useToken } from "lib/Context";
import jwt from "jsonwebtoken";
import {
  getObjectToSend,
  IBiuroFlat,
  Label,
  optionsDniPracy,
  RedStar,
} from "@PAGEHELPERS/dodaj/biuro/index";

const Hostessa = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const [tokenState] = useToken();
  const { id_user } = jwt.decode(tokenState.token) as any;
  const [user_id, setUser_id] = useState(id_user);
  // console.log(user_id);
  // const { username } = decodedToken;

  const [addMerchandiser] = useMutation(INSERT_REKRUTACJA_BIURO);

  const submitHandler = async (data: IBiuroFlat) => {
    const dataToInsert = getObjectToSend(data, user_id);

    const { data: dataReturned } = await addMerchandiser({
      variables: { dataToInsert },
    });

    console.log(dataToInsert);

    router.push(
      `/rekrutacje/biuro/${dataReturned.insert_rekrutacja_biuro_one?.id}`
    );
  };

  return (
    <LayoutM selectedField={selectedField.DODAJ_BRANCH}>
      <CardPanel>
        <h1>Dodaj nową rekrutację Hostessa</h1>
        <FormFlex onSubmit={handleSubmit(submitHandler)}>
          {/* ######### Stanowisko ######### */}

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
          </FormItem>

          {/* ######### manager ######### */}

          <FormItem>
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
          </FormItem>

          {/* ######### Miasto ######### */}

          <FormItem>
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
          </FormItem>

          {/* ######### Wojewodztwo ######### */}

          <FormItem>
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
          </FormItem>

          {/* ######### Dni_Pracy ######### */}

          <FormItem style={{ flexDirection: "column", alignItems: "center" }}>
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
          </FormItem>

          {/* ######### Stawka Godzinowa ######### */}

          <FormItem>
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
          </FormItem>

          {/* ######### ilosc_godzin ######### */}

          <FormItem>
            <Label htmlFor="ilosc_godzin">
              <RedStar />
              Ilość godzin:
            </Label>
            <Controller
              name="ilosc_godzin"
              id="ilosc_godzin"
              render={({ onChange, value }) => (
                <Input
                  defaultValue={value}
                  onChange={(e) => onChange(parseInt(e.target.value, 10))}
                />
              )}
              rules={{ required: true }}
              control={control}
              defaultValue={40}
              type="number"
              style={{ width: 200 }}
              placeholder="Podaj ilość godzin"
            />
          </FormItem>

          {/* ######### wynagrodzenie_miesieczne ######### */}

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
          </FormItem>

          {/* ######### Start pracy ######### */}

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
          </FormItem>

          <FormItem>
            <Controller
              name="submitButton"
              control={control}
              style={{ maxWidth: "max-content" }}
              as={<Button> Dodaj </Button>}
              icon={<PlusCircleFilled />}
              htmlType="submit"
              type="primary"
              size="large"
              defaultValue={null}
            />
          </FormItem>
        </FormFlex>
      </CardPanel>
    </LayoutM>
  );
};
export default Hostessa;
