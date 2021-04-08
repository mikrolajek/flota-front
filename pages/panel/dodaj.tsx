import LayoutM from "../../components/universal-components/LayoutM";
import CardWithIcon from "../../components/universal-components/CardWithIcon";
import { SmileOutlined, CarOutlined } from "@ant-design/icons";
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
        Dodaj
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
        <CardWithIcon
          Icon={SmileOutlined}
          title="Dodaj Uzytkownika"
          href="/dodaj/uzytkownik"
        />

        <CardWithIcon
          Icon={CarOutlined}
          title="Dodaj Auto"
          href="/dodaj/auto"
        />
      </div>
    </LayoutM>
  );
};

export default Dodaj;
