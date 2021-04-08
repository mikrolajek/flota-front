import React, { useState } from "react";
import { COLUMNS } from "./columns";
import { TableUniversal } from "../../universal/TableUniversal";
import { LoaderNoDash } from "../../../universal-components/Loaders";
import { Button, Drawer } from "antd";
import { CardPanel } from "../../../styledComponents/components";
import Title from "antd/lib/typography/Title";
import { FilterButton } from "../../../universal-components/FilterButton";
import styled from "styled-components";
import { useRouter } from "next/router";
import TextFieldOneDrawerFilter from "./filters/TextFieldOneDrawerFilter";
import { useGetRekrutacjeMerchandiserQuery } from "generated/graphql";

const DivFlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const TableMerchandiser = () => {
  const { data, loading, error } = useGetRekrutacjeMerchandiserQuery();
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const router = useRouter();

  const toggleDrawer = () => {
    setVisibleDrawer(!visibleDrawer);
  };

  if (!loading) {
    return (
      <>
        <Drawer
          visible={visibleDrawer}
          onClose={toggleDrawer}
          placement={"left"}>
          <h1>Merchandiser</h1>
          <TextFieldOneDrawerFilter />
          <Button>Resetuj filtry</Button>
        </Drawer>
        <CardPanel style={{ maxWidth: "auto" }}>
          <DivFlexCenter>
            <Title level={3}>Merchandiser</Title>
            <FilterButton onClick={toggleDrawer} />
          </DivFlexCenter>
          <TableUniversal data={data?.group} columns={COLUMNS} />
        </CardPanel>
      </>
    );
  }

  if (error) {
    console.log(error);
    router.push("/login");
  }

  return (
    <>
      <LoaderNoDash />
    </>
  );
};
