import LayoutM from "@COMPONENTS/universal-components/LayoutM";
import { SelectedPanelField } from "@UTILS/selectedPanel";
import { Tabs } from "antd";
import { useGetOneAutoQuery } from "generated/graphql";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Przebiegi,
  Szkody,
  HistoriaUzytkownicy,
  Przeglady,
  Opony,
  Mandaty,
} from "@PAGEHELPERS/lista/auto/id/tabs";
import {
  CardAuto,
  CardKartaOrlen,
  CardKlient,
  CardPolisa,
  CardUzytkownik,
} from "@PAGEHELPERS/lista/auto/id/cards";
import { ParsedUrlQuery } from "querystring";

interface IRouterParams extends ParsedUrlQuery {
  id: string;
  tab?: string;
}

const Id = () => {
  const router = useRouter();
  const { id, tab } = router.query as IRouterParams;
  const [currentTab, setCurrentTab] = useState<string>("ogolne");

  useEffect(() => {
    tab && setCurrentTab(tab);
  }, []);

  const idInt = parseInt(id);

  const { data, loading } = useGetOneAutoQuery({
    variables: { id: parseInt(id) },
  });

  const handleTabChange = (tabKey: string) => {
    setCurrentTab(tabKey);
    router.replace({ query: { id, tab: tabKey } });
  };

  if (loading) {
    <h1>loading...</h1>;
  }
  return (
    <>
      <LayoutM selectedField={SelectedPanelField.LISTA_AUTO} flexCenter={true}>
        <div style={{ width: "100%", minWidth: "900" }}>
          <Tabs
            onTabClick={handleTabChange}
            tabBarStyle={{ width: "100%" }}
            type={"card"}
            activeKey={currentTab}
            defaultActiveKey={"1"}
            centered
            style={{ width: "900" }}>
            <Tabs.TabPane tab={"Ogólne"} key={"ogolne"}>
              <FlexDiv>
                <CardAuto id={idInt} />
                <CardKartaOrlen id={idInt} />
                <CardPolisa idAuto={idInt} />
                <CardUzytkownik idAuto={idInt} />
                <CardKlient idAuto={idInt} />
              </FlexDiv>
            </Tabs.TabPane>

            <Tabs.TabPane tab={"Mandaty"} key={"mandaty"}>
              <Mandaty idAuto={idInt} />
            </Tabs.TabPane>

            <Tabs.TabPane tab={"Szkody"} key={"szkody"}>
              <Szkody idAuto={idInt} />
            </Tabs.TabPane>

            <Tabs.TabPane tab={"Opony"} key={"opony"}>
              <Opony idAuto={idInt} />
            </Tabs.TabPane>

            <Tabs.TabPane tab={"Przeglądy"} key={"przeglady"}>
              <Przeglady idAuto={idInt} />
            </Tabs.TabPane>

            <Tabs.TabPane tab={"Użytkownicy"} key={"uzytkownicy"}>
              <HistoriaUzytkownicy idAuto={idInt} />
            </Tabs.TabPane>

            <Tabs.TabPane tab={"Przebiegi"} key={"przebiegi"}>
              <Przebiegi idAuto={idInt} />
            </Tabs.TabPane>
          </Tabs>
        </div>
        <p>Id: {id}</p>
        <button
          onClick={() => {
            console.log(data);
          }}>
          Wyswietl data
        </button>
      </LayoutM>
    </>
  );
};

export default Id;
const FlexDiv = styled.div`
  display: flex;
  gap: 12px;
  /* align-items: center; */
  flex-wrap: wrap;
  justify-content: center;
`;
