import { useQuery } from "@apollo/client";
import { Card } from "antd";
import Title from "antd/lib/typography/Title";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { CardPanel } from "../../../components/styledComponents/components";
import { EditOutlined } from "@ant-design/icons";
import LayoutM from "../../../components/universal-components/LayoutM";
import { LoaderNoDash } from "../../../components/universal-components/Loaders";
import { GET_REKRUTACJA_MERCHANDISER_BY_PK } from "../../../utils/graphqlQSM/queryByPk";
//@ts-ignore
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styled from "styled-components";
import EditButton from "../../../components/universal-components/EditButton";
import dayjs from "dayjs";
import getTrueKeys from "../../../utils/getTrueKeys";

export const Id = () => {
  const router = useRouter();
  const { id }: any = router.query;

  const {
    data: { rekrutacja_merchandiser_by_pk: rekrutacja } = {},
    loading,
  } = useQuery(GET_REKRUTACJA_MERCHANDISER_BY_PK, {
    variables: { id: parseInt(id) },
  });

  if (loading) {
    return (
      <>
        <LayoutM flexCenter={false} selectedField={"6"}>
          <LoaderNoDash />
        </LayoutM>
      </>
    );
  }

  return (
    <>
      {console.log(rekrutacja)}

      <LayoutM flexCenter={false} selectedField={"6"}>
        <FlexDiv>
          <Card
            title={"Koordynator regionalny"}
            extra={<EditButton />}
            style={{ fontSize: 16 }}
            headStyle={{ fontSize: "1.5rem" }}
            bodyStyle={{ width: 300 }}>
            <CardItem
              label={"ID"}
              content={rekrutacja?.koordynator_regionalny?.id}
            />
            <CardItem
              label={"Imie"}
              content={rekrutacja?.koordynator_regionalny?.name}
            />
            <CardItem
              label={"Telefon"}
              content={rekrutacja?.koordynator_regionalny?.phone}
            />
            <CardItem
              label={"Email"}
              content={rekrutacja?.koordynator_regionalny?.email}
            />
          </Card>
          <Card
            title={"Rekrutacja"}
            extra={<EditButton />}
            style={{ fontSize: 16 }}
            headStyle={{ fontSize: "1.5rem" }}
            bodyStyle={{ width: 300 }}>
            <CardItem label={"ID"} content={rekrutacja?.rekrutacja?.id} />
            <CardItem
              label={"Rekruter"}
              content={`${rekrutacja?.rekrutacja?.user?.name} ${rekrutacja?.rekrutacja?.user?.surname}`}
            />
            <CardItem
              label={"Data zgłoszenia"}
              content={dayjs(rekrutacja?.rekrutacja?.data_zgloszenia).format(
                "DD/MM/YYYY"
              )}
            />
            <CardItem
              label={"Typ rekrutacji"}
              content={rekrutacja?.rekrutacja?.rekrutacja_typ?.name}
            />
            <CardItem
              label={"Status"}
              content={rekrutacja?.rekrutacja?.rekrutacja_status?.status_name}
            />
          </Card>
          <Card
            title={"Detale pracy"}
            extra={<EditButton />}
            style={{ fontSize: 16 }}
            headStyle={{ fontSize: "1.5rem" }}
            bodyStyle={{ width: 300 }}>
            <CardItem
              label={"Start pracy"}
              content={dayjs(rekrutacja?.praca_detale?.start_pracy).format(
                "DD/MM/YYYY"
              )}
            />
            <CardItem
              label={"Wynagrodzenie miesięczne"}
              content={rekrutacja?.praca_detale?.wynagrodzenie_miesieczne}
            />
            <CardItem
              label={"Stawka godzinowa"}
              content={rekrutacja?.praca_detale?.stawka_godzinowa}
            />

            <CardItem
              label={"Pracuje w dni"}
              content={
                // Zwraca klucze które mają wartości true
                getTrueKeys(rekrutacja?.praca_detale?.dni_pracy).map(
                  (x, index) => {
                    return (
                      <span key={index}>
                        <span>{x}</span>
                        <br />
                      </span>
                    );
                  }
                )
              }
            />
          </Card>

          <Card
            title={"Klient"}
            extra={<EditButton />}
            style={{ fontSize: 16 }}
            headStyle={{ fontSize: "1.5rem" }}
            bodyStyle={{ width: 300 }}>
            <CardItem label={"ID"} content={rekrutacja.klient?.id} />
            <CardItem label={"Nazwa"} content={rekrutacja.klient?.name} />
            <CardItem label={"Telefon"} content={rekrutacja.klient?.phone} />
          </Card>
          <Card
            title={"Market"}
            extra={<EditButton />}
            style={{ fontSize: 16 }}
            headStyle={{ fontSize: "1.5rem" }}
            bodyStyle={{ width: 300 }}>
            <CardItem label={"ID"} content={rekrutacja.market?.id} />
            <CardItem label={"Nazwa"} content={rekrutacja.market?.name} />
            <CardItem label={"Miasto"} content={rekrutacja.market?.city} />
            <CardItem label={"Ulica"} content={rekrutacja.market?.street} />
            <CardItem
              label={"Kod pocztowy"}
              content={rekrutacja.market?.post_code}
            />
          </Card>
        </FlexDiv>
      </LayoutM>
    </>
  );
};

export default Id;

interface ICardItemProps {
  label: string;
  content: any;
}
const CardItem = ({ label, content }: ICardItemProps) => {
  return (
    <>
      <p>
        <span>{label}:</span>
        <br />
        <b> {content}</b>
      </p>
    </>
  );
};

const FlexDiv = styled.div`
  display: flex;
  gap: 12px;
  /* align-items: center; */
  flex-wrap: wrap;
  justify-content: center;
`;
