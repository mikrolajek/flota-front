import { useQuery } from "@apollo/client";
import { Table } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { CardPanel } from "@COMPONENTS/styledComponents/components";
import LayoutM from "@COMPONENTS/universal-components/LayoutM";
import { LoaderInDash } from "@COMPONENTS/universal-components/Loaders";
import getColumnSearchProps from "@UTILS/GetColumnsSearchProps";
import { GET_ALL_REKRUTACJE } from "@UTILS/graphqlQSM/queries";
import { Drawer } from "antd";
import styled from "styled-components";
import Title from "antd/lib/typography/Title";
import slugify from "slugify";
import FilterButton from "@COMPONENTS/universal-components/FilterButton";

const DivFlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const Wszystkie = () => {
  const { loading, error, data } = useQuery(GET_ALL_REKRUTACJE);
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const toggleDrawer = () => {
    setVisibleDrawer(!visibleDrawer);
  };

  const [searchText, setSearchText] = useState<string>("");
  const [searchedColumn, setSearchedColumn] = useState<string>("");

  const getColumnSearchProp: (arg: string) => any = getColumnSearchProps(
    searchText,
    setSearchText,
    searchedColumn,
    setSearchedColumn
  );

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      ...getColumnSearchProp("id"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProp("status"),
    },
    {
      title: "Typ",
      dataIndex: "typ",
      key: "typ",
      ...getColumnSearchProp("typ"),
    },
    {
      title: "Hr",
      dataIndex: "hr",
      key: "hr",
      ...getColumnSearchProp("hr"),
    },
    {
      title: "Zasób",
      dataIndex: "link",
      key: "link",
      render: (text: string) => {
        const [link, id] = text.split("/");
        return (
          <span>
            <Link
              href={`/rekrutacje/${link}/[id]`}
              as={`/rekrutacje/${link}/${id}`}>
              <a>Więcej&nbsp;&gt;</a>
            </Link>
          </span>
        );
      },
    },
  ];

  if (loading) {
    return <LoaderInDash flexCenter={true} selectedField={6} />;
  }

  if (error) {
    console.log(error, `error`);
    const router = useRouter();
    router.push("/login");
  }

  if (!loading) {
    const dataSource = data.group.map((item: any) => {
      const itemId =
        item?.rekrutacja_merchandisers?.[0]?.id ||
        item?.rekrutacja_hostessa_tks?.[0]?.id ||
        item?.rekrutacja_merchandiser_mobilny_phs?.[0]?.id ||
        item?.rekrutacja_biuros?.[0]?.id ||
        item?.rekrutacja_innes?.[0]?.id;

      return {
        id: item.id,
        status: item.status.name,
        typ: item.rekrutacja_typ.name,
        hr: `${item.user.name} ${item.user.surname} `,
        link: `${slugify(item.rekrutacja_typ.name)}/${itemId}`,
        key: `${item.id}`,
      };
    });

    return (
      <LayoutM flexCenter={true} selectedField={"6"}>
        <Drawer
          visible={visibleDrawer}
          onClose={toggleDrawer}
          placement={"left"}>
          <h1>To ja, szuflada</h1>
          <button>Zastosuj filtry</button>
        </Drawer>
        <CardPanel style={{ maxWidth: "800px" }}>
          <DivFlexCenter>
            <Title level={3}>Wszystkie</Title>
            <FilterButton onClick={toggleDrawer} />
          </DivFlexCenter>
          <Table dataSource={dataSource} columns={columns} />
        </CardPanel>
      </LayoutM>
    );
  }
};

export default Wszystkie;
