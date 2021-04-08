import EditButton from "@COMPONENTS/universal-components/EditButton";
import LayoutM from "@COMPONENTS/universal-components/LayoutM";
import { SelectedPanelField } from "@UTILS/selectedPanel";
import { Card, Tabs } from "antd";
import { useGetOneUzytkownikQuery } from "generated/graphql";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { CardItem } from "@COMPONENTS/universal-components/CardExtended";

const Id = () => {
  const router = useRouter();
  const { id }: any = router.query;

  const idInt = parseInt(id);

  const { data, loading } = useGetOneUzytkownikQuery({
    variables: { id: parseInt(id) },
  });

  if (loading) {
    <h1>loading...</h1>;
  }
  return (
    <>
      <LayoutM
        selectedField={SelectedPanelField.DODAJ_UZYTKOWNIK}
        flexCenter={true}>
        <div style={{ width: "100%", minWidth: "900" }}>
          <Tabs
            tabBarStyle={{ width: "100%" }}
            type={"card"}
            defaultActiveKey={"1"}
            centered
            style={{ width: "900" }}>
            <Tabs.TabPane tab={"Ogólne"} key={1}>
              <FlexDiv>
                <Card
                  title={"Użytkownik"}
                  extra={<EditButton />}
                  style={{ fontSize: 16 }}
                  headStyle={{ fontSize: "1.5rem" }}
                  bodyStyle={{ width: 300 }}>
                  <CardItem label={"ID"} content={data?.Uzytkownik_by_pk?.id} />
                  <CardItem
                    label={"Imię"}
                    content={data?.Uzytkownik_by_pk?.imie}
                  />

                  <CardItem
                    label={"Nazwisko"}
                    content={data?.Uzytkownik_by_pk?.nazwisko}
                  />

                  <CardItem
                    label={"Telefon"}
                    content={data?.Uzytkownik_by_pk?.telefon}
                  />
                </Card>
              </FlexDiv>
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
