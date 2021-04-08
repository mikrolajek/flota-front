import { Form, Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTextFieldOne,
  setTextFieldOne,
} from "../../../../../lib/store/slices/filterSlice";

const TextFieldOneDrawerFilter = () => {
  const textFieldOne = useSelector(selectTextFieldOne);
  const dispatch = useDispatch();

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTextFieldOne(event.target.value));
  };

  return (
    <Form name="basic">
      <Form.Item initialValue={textFieldOne} label="Id" name="Id">
        <Input
          type="search"
          name="id Search"
          id="id-Search"
          defaultValue={textFieldOne}
          onChange={onChangeHandler}
        />
      </Form.Item>
    </Form>
  );
};

export default TextFieldOneDrawerFilter;
