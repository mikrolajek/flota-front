import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTextFieldOne } from "../../../../../lib/store/slices/filterSlice";

export const TextfieldOneFilter = ({ column }: any) => {
  const textFieldOne = useSelector(selectTextFieldOne);

  const { setFilter } = column;

  useEffect(() => {
    setFilter(textFieldOne);
  }, [textFieldOne]);

  return <></>;
};

export default TextfieldOneFilter;
