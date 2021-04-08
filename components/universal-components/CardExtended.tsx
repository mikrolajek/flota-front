import { Card, Drawer } from "antd";
import { CardProps } from "antd/lib/card";
import React, { useState, FC, ReactNode } from "react";
import EditButton from "@COMPONENTS/universal-components/EditButton";
import AddButton from "@COMPONENTS/universal-components/AddButton";
import boolPonglishToString from "@UTILS/boolPonglishToString";

export interface ICardItemProps {
  label: string;
  content: any;
}

interface ICardExtended {
  cardProps: CardProps;
  modalComponent?: ReactNode;
  isDataChecker: boolean;
  AddComponent?: ReactNode;
  EditComponent?: ReactNode;
}

export const CardExtented: FC<ICardExtended> = ({
  cardProps,
  isDataChecker,
  children,
  AddComponent,
  EditComponent,
}) => {
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);

  const onToggleEditDrawer = () => {
    setIsEditDrawerOpen(!isEditDrawerOpen);
  };

  const onToggleAddDrawer = () => {
    setIsAddDrawerOpen(!isAddDrawerOpen);
  };

  const isEditable = typeof EditComponent !== "undefined";
  const isAddable = typeof AddComponent !== "undefined";

  if (!isEditable && !isAddable && !isDataChecker) {
    return (
      <>
        <Card
          {...cardProps}
          bodyStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: 300,
          }}
          headStyle={{ fontSize: "1.5rem" }}
          style={{ fontSize: 16 }}>
          <h3>Brak wartości</h3>
          <br />
        </Card>
      </>
    );
  }

  if (!isDataChecker) {
    return (
      <>
        <Card
          {...cardProps}
          bodyStyle={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: 300,
          }}
          headStyle={{ fontSize: "1.5rem" }}
          style={{ fontSize: 16 }}>
          <h3>Brak wartości</h3>
          <h4>Dodaj nową pozycję</h4>
          <br />
          <AddButton onClick={onToggleAddDrawer} />
        </Card>

        <Drawer
          title={"Dodaj pozycje"}
          //   width={"400px"}
          visible={isAddDrawerOpen}
          onClose={onToggleAddDrawer}>
          {AddComponent}
        </Drawer>
      </>
    );
  }

  return (
    <>
      <Card
        {...cardProps}
        bodyStyle={{
          width: 300,
        }}
        headStyle={{ fontSize: "1.5rem" }}
        style={{ fontSize: 16 }}
        extra={isEditable && <EditButton onClick={onToggleEditDrawer} />}
        {...cardProps}>
        {children}
      </Card>

      <Drawer
        title={"Edytuj pozycje"}
        visible={isEditDrawerOpen}
        onClose={onToggleEditDrawer}>
        {EditComponent}
      </Drawer>
    </>
  );
};

export interface ICardItemProps {
  label: string;
  content: any;
}
export const CardItem: FC<ICardItemProps> = ({ label, content }) => {
  if (content == undefined) {
    return <></>;
  }
  if (typeof content === "boolean") {
    return (
      <>
        <p>
          <span>{label}:</span>
          <br />
          <b> {boolPonglishToString(content)}</b>
        </p>
      </>
    );
  }
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
