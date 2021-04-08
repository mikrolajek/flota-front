import { Table } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import slugify from "slugify";
import getColumnSearchProps from "../../utils/GetColumnsSearchProps";

interface IProps {
  dataSource: any;
}

export const TableMerchandiser = ({ dataSource }: IProps) => {
  const dataSourceForTable = dataSource.group.map((item: any) => {
    const itemId = item?.rekrutacja_merchandisers?.[0]?.id;

    return {
      id: item.id,
      status: item.status.name,
      typ: item.rekrutacja_typ.name,
      hr: `${item.user.name} ${item.user.surname} `,
      link: `${slugify(item.rekrutacja_typ.name)}/${itemId}`,
      key: `${item.id}`,
    };
  });

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
      sorter: (a: any, b: any) => a.id - b.id,
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
  return (
    <>
      <Table dataSource={dataSourceForTable} columns={columns} />
    </>
  );
};

export default TableMerchandiser;
