import { Button, Modal } from "antd";
import React, { useState } from "react";
import { CellProps } from "react-table";

export interface IEditFormProps {
  triggerAction: boolean;
  setTriggerAction: (arg: boolean) => void;
  cell: CellProps<any, any>;
}

export interface IEditCellProps<T extends Object = {}> {
  cell: CellProps<T, number>;
  EditForm: React.FC<IEditFormProps>;
}

export const EditCell = ({ cell, EditForm }: IEditCellProps<any>) => {
  const [triggerAction, setTriggerAction] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOk = () => {
    setTriggerAction(true);
    triggerAction && setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Button type={"primary"} size={"small"} onClick={toggleModal}>
        Edytuj
      </Button>

      <Modal
        title="Edytuj"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={toggleModal}>
        <EditForm
          cell={cell}
          setTriggerAction={setTriggerAction}
          triggerAction={triggerAction}
        />
      </Modal>
    </>
  );
};
