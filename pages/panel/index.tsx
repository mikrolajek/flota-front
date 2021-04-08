import React from "react";
import LayoutM from "../../components/universal-components/LayoutM";
import {
  PieChartOutlined,
  UnorderedListOutlined,
  PlusCircleOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import Head from "next/head";
import CardWithIcon from "../../components/universal-components/CardWithIcon";

const Panel = () => {
  return (
    <>
      <Head>
        <title>Panel </title>
      </Head>
      <LayoutM flexCenter={true} selectedField={9}>
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
            Icon={UnorderedListOutlined}
            title="Lista"
            description="Panel listowań"
            href="/panel/lista"
          />

          <CardWithIcon
            Icon={PieChartOutlined}
            title="Raporty"
            description="Wszystkie raporty"
            href="/raporty"
          />

          <CardWithIcon
            Icon={SnippetsOutlined}
            title="Archiwum"
            description="Archiwum "
            href="/raporty"
          />
          <CardWithIcon
            Icon={PlusCircleOutlined}
            title="Dodaj"
            description="Panel dodawania"
            href="/panel/dodaj"
          />
        </div>
      </LayoutM>
    </>
  );
};

export default Panel;
// #1890FF
