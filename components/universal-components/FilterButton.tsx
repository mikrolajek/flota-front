import styled from "styled-components";
import { FilterOutlined } from "@ant-design/icons";
import { DOMAttributes } from "react";

const RoundButton = styled.button`
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
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: white;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048);
`;

export const FilterButton = (props: DOMAttributes<HTMLButtonElement>) => {
  return (
    <RoundButton {...props}>
      <FilterOutlined style={{ fontSize: "18px" }} />
    </RoundButton>
  );
};

export default FilterButton;
