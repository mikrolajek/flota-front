import LayoutM from "../../components/universal-components/LayoutM";
import CardWithIcon from "../../components/universal-components/CardWithIcon";
import {
  RocketOutlined,
  AlignCenterOutlined,
  QuestionCircleOutlined,
  ShoppingCartOutlined,
  SmileOutlined,
  CarOutlined,
} from "@ant-design/icons";
import React from "react";
// import { CardPanel } from "../components/styledComponents/components";
import { Typography } from "antd";
const { Title } = Typography;

export const Dodaj = () => {
  return (
    <LayoutM flexCenter={true} selectedField={9}>
      <Title
        level={1}
        style={{ justifySelf: "center", width: "100%", textAlign: "center" }}>
        Lista
      </Title>
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "100%",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <CardWithIcon Icon={CarOutlined} title="Lista aut" href="/lista/auto" />
        <CardWithIcon
          Icon={SmileOutlined}
          title="Lista Użytkowników"
          href="/lista/uzytkownik"
        />
      </div>
    </LayoutM>
  );
};

export default Dodaj;
