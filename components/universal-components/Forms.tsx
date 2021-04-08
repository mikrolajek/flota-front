import getCorrectPopUpValues from "@UTILS/getCorrectPopUpValues";
import IOptionSelect from "@UTILS/IOptionSelect";
import { DatePicker, Input, Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import FormItem from "antd/lib/form/FormItem";
import TextArea from "antd/lib/input/TextArea";
import dayjs from "dayjs";
import moment from "moment";
import React, { FC } from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";

interface IField {
  control: any;
  name: string;
  tytul: string;
  placeholder: string;
  required: boolean;
  defaultValue?: any;
}
type ICheckbox = {
  [K in keyof Omit<IField, "placeholder" | "required">]: IField[K];
};

const TextAreaField: FC<IField> = ({
  control,
  name,
  tytul,
  placeholder,
  required,
  defaultValue,
}: IField) => (
  <FormItem>
    <Label htmlFor={name}>
      {required && <RedStar />}
      {tytul}:
    </Label>
    <Controller
      name={name}
      id={name}
      as={<TextArea autoSize={{ minRows: 2, maxRows: 5 }} />}
      rules={{ required: required }}
      control={control}
      defaultValue={defaultValue || null}
      type="text"
      style={{ width: 200 }}
      placeholder={placeholder}
    />
  </FormItem>
);

const TextField = ({
  control,
  name,
  tytul,
  placeholder,
  required,
  defaultValue,
}: IField) => (
  <FormItem>
    <Label htmlFor={name}>
      {required && <RedStar />}
      {tytul}:
    </Label>
    <Controller
      name={name}
      id={name}
      as={<Input />}
      rules={{ required: required }}
      control={control}
      defaultValue={defaultValue || null}
      type="text"
      style={{ width: 200 }}
      placeholder={placeholder}
    />
  </FormItem>
);

interface INumberField extends Omit<IField, "id"> {}

const NumberField = ({
  control,
  name,
  tytul,
  placeholder,
  required,
  defaultValue,
}: INumberField) => (
  <FormItem>
    <Label htmlFor={name}>
      {required && <RedStar />}
      {tytul}:
    </Label>
    <Controller
      name={name}
      id={name}
      render={({ onChange, value }) => (
        <Input
          type={"number"}
          defaultValue={defaultValue}
          style={{ width: 200 }}
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
        />
      )}
      rules={{ required: required }}
      control={control}
      defaultValue={defaultValue}
      type="number"
      style={{ width: 200 }}
      placeholder={placeholder}
    />
  </FormItem>
);

const ChechboxField = ({ control, name, tytul }: ICheckbox) => (
  <FormItem
  // style={{ flexDirection: "column", alignItems: "center" }}
  >
    <Label>
      <RedStar />
      {tytul}:
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
        name={name}
        defaultValue={false}
        type="checkbox"
        control={control}
      />
    </div>
  </FormItem>
);

interface ISelectField extends IField {
  options: IOptionSelect[];
}
const SelectField: FC<ISelectField> = ({
  name,
  control,
  placeholder,
  options,
  tytul,
  required,
  defaultValue,
}) => {
  return (
    <>
      <FormItem>
        <label htmlFor={name}>
          {required && <RedStar />}
          {tytul}:
          <br />
          <br />
        </label>
        <Controller
          name={name}
          id={name}
          as={<Select />}
          rules={{ required: required }}
          options={options}
          control={control}
          defaultValue={defaultValue || null}
          filterOption={(input: any, option: any) =>
            getCorrectPopUpValues(options, input, option)
          }
          showSearch
          placeholder={placeholder}
          optionFilterProp="children"
        />
      </FormItem>
    </>
  );
};

const DateField = ({
  defaultValue,
  control,
  name,
  tytul,
  placeholder,
  required,
}: IField) => (
  <FormItem>
    <Label htmlFor={name}>
      {required && <RedStar />}
      {tytul}:
    </Label>
    <Controller
      id={name}
      name={name}
      render={({ onChange, name, onBlur, value }) => {
        // console.log("data", value);
        return (
          <DatePicker
            defaultValue={
              defaultValue
                ? moment(defaultValue, "YYYY-MM-DD")
                : moment(dayjs().format("YYYY-MM-DD"), "YYYY-MM-DD")
            }
            format={"YYYY-MM-DD"}
            placeholder={placeholder}
            onBlur={onBlur}
            name={name}
            onChange={(_, dateString) => onChange(dateString)}
          />
        );
      }}
      defaultValue={defaultValue}
      rules={{ required }}
      control={control}
      type="date"
      style={{ width: 200 }}
      placeholder={placeholder}
    />
  </FormItem>
);

const CheckboxField = ({ control, name, tytul, defaultValue }: ICheckbox) => (
  <FormItem
  // style={{ flexDirection: "column", alignItems: "center" }}
  >
    <Label>
      <RedStar />
      {tytul}:
    </Label>
    <div>
      <Controller
        render={({ name, onChange, value }) => {
          return (
            <Checkbox
              style={{ display: "block", marginLeft: "8px" }}
              name={name}
              checked={value}
              onChange={(e) => onChange(e.target.checked)}>
              <span>Tak</span>
            </Checkbox>
          );
        }}
        checked={defaultValue}
        name={name}
        defaultValue={defaultValue || false}
        type="checkbox"
        control={control}
      />
    </div>
  </FormItem>
);

export {
  CheckboxField,
  TextAreaField,
  TextField,
  NumberField,
  SelectField,
  DateField,
};

export const RedStar = styled.span`
  color: red;
  font-weight: bold;
  &::before {
    content: "* ";
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
`;
