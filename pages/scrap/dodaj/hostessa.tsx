import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import LayoutM from "@COMPONENTS/universal-components/LayoutM";
import { Select, Button, Spin, Input, Checkbox, DatePicker } from "antd";
import selectedField from "@UTILS/selectedPanel";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { PlusCircleFilled } from "@ant-design/icons";
import { INSERT_REKRUTACJA_HOSTESSA_TK } from "@GQL/mutations";
import {
  CardPanel,
  FormFlex,
  FormItem,
} from "@COMPONENTS/styledComponents/components";
import { GET_ALL_REKRUTACJA_MERCHANDISER_DETAILS } from "@GQL/queries";
import dayjs from "dayjs";
import moment from "moment";
import { useToken } from "lib/Context";
import jwt from "jsonwebtoken";
import {
  getCorrectPopUpValues,
  getObjectToSend,
  getOptionsKlient,
  getOptionsKoordynator,
  getOptionsMarket,
  IDataToSendHostessa,
  IHostessaFlat,
  Label,
  optionsDniPracy,
  RedStar,
} from "pages/scrap/hostessa/index";

const Hostessa = () => {
  const router = useRouter();
  const { control, handleSubmit } = useForm();
  const { loading, error, data } = useQuery(
    GET_ALL_REKRUTACJA_MERCHANDISER_DETAILS
  );

  //Wyjmuje token, i biore z niego pole id_user

  // @ts-ignore

  const [tokenState] = useToken();
  const { id_user } = jwt.decode(tokenState.token) as any;
  const [user_id, setUser_id] = useState(id_user);
  // console.log(user_id);
  // const { username } = decodedToken;

  const [addMerchandiser] = useMutation(INSERT_REKRUTACJA_HOSTESSA_TK);

  const submitHandler = async (data: IHostessaFlat) => {
    const dataToInsert = getObjectToSend(data, user_id);

    const { data: dataReturned } = await addMerchandiser({
      variables: { dataToInsert },
    });

    console.log(dataReturned);

    router.push(
      `/rekrutacje/hostessa/${dataReturned.insert_rekrutacja_hostessa_tk_one?.id}`
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

  if (!loading) {
    const optionsMarket = getOptionsMarket(data);
    const optionsKlient = getOptionsKlient(data);
    const optionsKoordynator = getOptionsKoordynator(data);

    return (
      <LayoutM selectedField={selectedField.DODAJ_BRANCH}>
        <CardPanel>
          <h1>Dodaj nową rekrutację Hostessa</h1>
          <FormFlex onSubmit={handleSubmit(submitHandler)}>
            {/* ######### MARKET ######### */}
            <FormItem>
              <label htmlFor="id_market">
                <RedStar />
                Market:
                <br />
                <br />
              </label>
              <Controller
                name="id_market"
                id="id_market"
                as={<Select />}
                rules={{ required: true }}
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
              <Label htmlFor="id_market">
                <RedStar />
                Klient:
              </Label>
              <Controller
                name="id_klient"
                id="id_klient"
                as={<Select />}
                rules={{ required: true }}
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
                <RedStar />
                Koordynator Regionalny:
              </Label>

              <Controller
                name="id_koordynator_regionalny"
                id="id_koordynator_regionalny"
                as={<Select />}
                rules={{ required: true }}
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

            {/* ######### wsparcie rekrutacyjne ######### */}

            <FormItem style={{ flexDirection: "column", alignItems: "center" }}>
              <Label>
                <RedStar />
                Wsparcie rekrutacyjne:
              </Label>
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
                  control={control}
                />
              </div>
            </FormItem>

            {/* ######### Czy tk ######### */}

            <FormItem style={{ flexDirection: "column", alignItems: "center" }}>
              <Label>
                <RedStar />
                Czy tk:
              </Label>
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
                  name={"is_tk"}
                  defaultValue={false}
                  type="checkbox"
                  control={control}
                />
              </div>
            </FormItem>

            {/* ######### wsparcie rekrutacyjne ######### */}

            <FormItem style={{ flexDirection: "column", alignItems: "center" }}>
              <Label>
                <RedStar />
                Czy hostessa? :
              </Label>
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
                  name={"is_hostessa"}
                  defaultValue={false}
                  type="checkbox"
                  control={control}
                />
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

            {/* ######### Stawka Godzinowa ######### */}

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
                defaultValue={moment(
                  dayjs().format("YYYY-MM-DD"),
                  "YYYY-MM-DD"
                )}
                rules={{ required: true }}
                control={control}
                type="date"
                style={{ width: 200 }}
                placeholder="Podaj date startu pracy"
              />
            </FormItem>

            {/* ######### Data wykonania zlecienia ######### */}

            <FormItem>
              <Label htmlFor="data_wykonanie_zlecenia">
                <RedStar />
                Data wykonania zlecenia:
              </Label>
              <Controller
                name="data_wykonanie_zlecenia"
                id="data_wykonanie_zlecenia"
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
                defaultValue={moment(
                  dayjs().format("YYYY-MM-DD"),
                  "YYYY-MM-DD"
                )}
                rules={{ required: true }}
                control={control}
                type="date"
                style={{ width: 200 }}
                placeholder="Podaj date wykoniania zlecenia"
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
  }
};
export default Hostessa;
