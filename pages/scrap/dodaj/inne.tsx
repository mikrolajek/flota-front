import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import LayoutM from "../../components/universal-components/LayoutM";
import { Select, Button, Spin, Input, Checkbox, DatePicker } from "antd";
import selectedField from "../../utils/selectedPanel";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { PlusCircleFilled } from "@ant-design/icons";
import {
  INSERT_REKRUTACJA_INNE,
  INSERT_REKRUTACJA_MERCHANDISER_MOBILNY,
} from "@GQL/mutations";
import {
  CardPanel,
  FormFlex,
  FormItem,
} from "@COMPONENTS/styledComponents/components";
import { GET_ALL_REKRUTACJA_MERCHANDISER_DETAILS } from "@GQL/queries";
import dayjs from "dayjs";
import moment from "moment";
import {
  getCorrectPopUpValues,
  getOptionsKlient,
  getOptionsKoordynator,
  getOptionsMarket,
  Label,
  optionsDniPracy,
  RedStar,
} from "pagesHelpers/dodaj/merchandiser";
import { useToken } from "lib/Context";
import jwt from "jsonwebtoken";

import { getObjectToSend, IDataToSendInneFlat } from "@PAGEHELPERS/dodaj/inne";

const MerchendiserMobilny = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const { loading, error, data } = useQuery(
    GET_ALL_REKRUTACJA_MERCHANDISER_DETAILS
  );

  //Wyjmuje token, i biore z niego pole id_user

  // @ts-ignore

  const [tokenState] = useToken();
  const { id_user } = jwt.decode(tokenState.token) as any;
  const [user_id] = useState(id_user);
  // const { username } = decodedToken;

  const [addInne] = useMutation(INSERT_REKRUTACJA_INNE);

  const submitHandler = async (data: IDataToSendInneFlat) => {
    const dataToInsert = getObjectToSend(data, user_id);
    console.log(dataToInsert);

    const { data: dataReturned } = await addInne({
      variables: { dataToInsert },
    });
    router.push(
      `/rekrutacje/inne/${dataReturned.insert_rekrutacja_inne_one.id}`
    );
  };
  if (loading) {
    return (
      <LayoutM selectedField={selectedField.DODAJ_BRANCH}>
        <CardPanel>
          <Spin size="large" />
        </CardPanel>
      </LayoutM>
    );
  }

  if (error) {
    console.log(error);
    router.push("/login");
  }

  const optionsMarket = getOptionsMarket(data);
  const optionsKlient = getOptionsKlient(data);
  const optionsKoordynator = getOptionsKoordynator(data);
  return (
    <LayoutM selectedField={selectedField.DODAJ_BRANCH}>
      <CardPanel>
        <h1>Dodaj nową rekrutację Merchandiser</h1>
        <FormFlex onSubmit={handleSubmit(submitHandler)}>
          {/* ######### MARKET ######### */}
          <FormItem>
            <label htmlFor="id_market">
              Market:
              <br />
              <br />
            </label>
            <Controller
              name="id_market"
              id="id_market"
              as={<Select />}
              rules={{ required: false }}
              options={optionsMarket}
              control={control}
              defaultValue={null}
              filterOption={(input: any, option: any) =>
                getCorrectPopUpValues(optionsMarket, input, option)
              }
              showSearch
              style={{ background: "red", width: 500 }}
              placeholder="Wybierz market"
              optionFilterProp="children"
            />
          </FormItem>
          {/* ######### KLIENT ######### */}
          <FormItem>
            <Label htmlFor="id_market">Klient:</Label>
            <Controller
              name="id_klient"
              id="id_klient"
              as={<Select />}
              rules={{ required: false }}
              options={optionsKlient}
              control={control}
              defaultValue={null}
              filterOption={(input: any, option: any) =>
                getCorrectPopUpValues(optionsKlient, input, option)
              }
              showSearch
              style={{ width: 500 }}
              dropdownStyle={{ width: 700 }}
              placeholder="Wybierz klienta"
              optionFilterProp="children"
            />
          </FormItem>

          {/* ######### Koordynator_regionalny ######### */}
          <FormItem>
            <Label htmlFor="id_koordynator_regionalny">
              Koordynator Regionalny:
            </Label>

            <Controller
              name="id_koordynator_regionalny"
              id="id_koordynator_regionalny"
              as={<Select />}
              rules={{ required: false }}
              options={optionsKoordynator}
              control={control}
              defaultValue={null}
              filterOption={(input: any, option: any) =>
                getCorrectPopUpValues(optionsKoordynator, input, option)
              }
              showSearch
              style={{ width: 500 }}
              dropdownStyle={{ width: 700 }}
              placeholder="Wybierz koordynatora"
              optionFilterProp="children"
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
                            ? {
                                style: { color: "red", fontWeight: "bold" },
                              }
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

          {/* ######### wsparcie rekrutacyjne ######### */}

          <FormItem style={{ flexDirection: "column", alignItems: "center" }}>
            <Label>Wsparcie rekrutacyjne:</Label>
            <div>
              <Controller
                render={({ name, onChange }) => {
                  return (
                    <Checkbox
                      style={{ display: "block", marginLeft: "8px" }}
                      name={name}
                      onChange={(e) => onChange(e.target.checked)}>
                      <span>Tak</span>
                    </Checkbox>
                  );
                }}
                name={"wsparcie_rekrutacyjne"}
                defaultValue={false}
                type="checkbox"
                rules={{ required: false }}
                control={control}
              />
            </div>
          </FormItem>

          {/* ######### Manager ######### */}

          <FormItem>
            <Label htmlFor="manager">Manager:</Label>
            <Controller
              name="manager"
              id="manager"
              as={<Input />}
              rules={{ required: false }}
              control={control}
              defaultValue={null}
              type="text"
              style={{ width: 200 }}
              placeholder="Podaj imie i nazwisko managera"
            />
          </FormItem>

          {/* ######### Stanowisko ######### */}

          <FormItem>
            <Label htmlFor="stanowisko">Stanowisko:</Label>
            <Controller
              name="stanowisko"
              id="stanowisko"
              as={<Input />}
              rules={{ required: false }}
              control={control}
              defaultValue={null}
              type="text"
              style={{ width: 200 }}
              placeholder="Podaj stanowisko"
            />
          </FormItem>

          {/* ######### Miasto ######### */}

          <FormItem>
            <Label htmlFor="miasto">Miasto:</Label>
            <Controller
              name="miasto"
              id="miasto"
              as={<Input />}
              rules={{ required: false }}
              control={control}
              defaultValue={null}
              type="text"
              style={{ width: 200 }}
              placeholder="Podaj miasto"
            />
          </FormItem>

          {/* ######### Wojewodztwo ######### */}

          <FormItem>
            <Label htmlFor="wojewodztwo">Wojewodztwo:</Label>
            <Controller
              name="wojewodztwo"
              id="wojewodztwo"
              as={<Input />}
              rules={{ required: false }}
              control={control}
              defaultValue={null}
              type="text"
              style={{ width: 200 }}
              placeholder="Podaj wojewodztwo"
            />
          </FormItem>

          {/* ######### Stawka Godzinowa ######### */}

          <FormItem>
            <Label htmlFor="stawka_godzinowa">Stawka godzinowa:</Label>
            <Controller
              name="stawka_godzinowa"
              id="stawka_godzinowa"
              render={({ onChange, value }) => (
                <Input
                  defaultValue={value}
                  onChange={(e) => onChange(parseInt(e.target.value, 10))}
                />
              )}
              rules={{ required: false }}
              control={control}
              defaultValue={18}
              type="number"
              style={{ width: 200 }}
              placeholder="Podaj stawkę godzinową"
            />
          </FormItem>

          {/* ######### Wynagrodzenie miesieczne ######### */}

          <FormItem>
            <Label htmlFor="wynagrodzenie_miesieczne">
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
              rules={{ required: false }}
              control={control}
              defaultValue={2000}
              type="number"
              style={{ width: 200 }}
              placeholder="Podaj wynagrodzenie miesieczne"
            />
          </FormItem>

          {/* ######### ilosc_godzin ######### */}

          <FormItem>
            <Label htmlFor="ilosc_godzin">Ilość godzin:</Label>
            <Controller
              name="ilosc_godzin"
              id="ilosc_godzin"
              render={({ onChange, value }) => (
                <Input
                  defaultValue={value}
                  onChange={(e) => onChange(parseInt(e.target.value, 10))}
                />
              )}
              rules={{ required: false }}
              control={control}
              defaultValue={40}
              type="number"
              style={{ width: 200 }}
              placeholder="Podaj ilość godzin"
            />
          </FormItem>

          {/* ######### Start pracy ######### */}

          <FormItem>
            <Label htmlFor="start_pracy">Start pracy:</Label>
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
              rules={{ required: false }}
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

export default MerchendiserMobilny;
