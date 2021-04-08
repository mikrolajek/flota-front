import React, { useMemo } from "react";
import { Column, useFilters, useSortBy, useTable } from "react-table";
import { IData } from "../columns";

interface IProps {
  data: any;
  columns: any;
}
export const TableUniversal = ({ data, columns }: IProps) => {
  const columnsForTable = useMemo<Column<IData>[]>(() => columns, []);
  const dataForTable = useMemo<IData[]>(() => data, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<IData>(
    { columns: columnsForTable, data: dataForTable },
    useFilters,
    useSortBy
  );

  return (
    <>
      <table {...getTableProps()} style={{ tableLayout: "fixed" }}>
        <thead className="ant-table-thead">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="ant-table-cell"
                    style={{ userSelect: "none", cursor: "pointer" }}
                    key={column.id}>
                    {column.render("Header")}

                    <>{column.canFilter ? column.render("Filter") : null}</>

                    {/* Arrows */}
                    <span className="ant-table-column-sorter ant-table-column-sorter-full">
                      <span className="ant-table-column-sorter-inner">
                        <span
                          role="img"
                          aria-label="caret-up"
                          className="anticon anticon-caret-up ant-table-column-sorter-up">
                          <svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-up"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"></path>
                          </svg>
                        </span>
                        <span
                          role="img"
                          aria-label="caret-down"
                          className="anticon anticon-caret-down ant-table-column-sorter-down">
                          <svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true">
                            <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                          </svg>
                        </span>
                      </span>
                    </span>
                    {/* Arrows End*/}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps} className="ant-table-tbody">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="ant-table-row ant-table-row-level-0">
                {row.cells.map((cell, index) => (
                  <td
                    {...cell.getCellProps()}
                    className="ant-table-cell"
                    key={index}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
