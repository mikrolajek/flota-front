import styled from "styled-components";
import { EditOutlined } from "@ant-design/icons";
import React, { DOMAttributes } from "react";

const EditButton = styled.button`
  transition: box-shadow ease-in-out 0.25s;

  &:focus {
    outline: 0;
  }

  &:active {
    border: none;
  }
  &:hover {
    /* transform: scale(1.05); */
    box-shadow: 0 0px 5px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 6.7px 5.3px rgba(0, 0, 0, 0.048);
  }
  border-radius: 50%;
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: white;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048);
`;

export const FilterButton = (props: DOMAttributes<HTMLButtonElement>) => {
  return (
    <EditButton {...props}>
      <EditOutlined />
    </EditButton>
  );
};

export default FilterButton;
