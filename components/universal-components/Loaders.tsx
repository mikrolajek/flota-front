import React from "react";
import LayoutM from "./LayoutM";
import { Spin } from "antd";
import { CardPanel } from "../styledComponents/components";
import styled from "styled-components";

const CenterFlexItem = styled.div`
  margin: auto;
`;
interface props {
  selectedField: React.ReactText;
  flexCenter?: boolean;
}

export const LoaderInDash = ({ selectedField, flexCenter }: props) => {
  return (
    <LayoutM flexCenter={flexCenter} selectedField={selectedField}>
      <CardPanel>
        <CenterFlexItem>
          <Spin size="large" />
        </CenterFlexItem>
      </CardPanel>
    </LayoutM>
  );
};

export const LoaderNoDash = () => {
  return (
    <CardPanel>
      <CenterFlexItem>
        <Spin size="large" />
      </CenterFlexItem>
    </CardPanel>
  );
};
