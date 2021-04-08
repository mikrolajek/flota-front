import React, { useMemo } from "react";
import { useTable, Column, ColumnInstance } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";

interface IData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  age: number;
  country: string;
  phone: string;
}

export const ReactTable = () => {
  const columns = useMemo<Column<IData>[]>(() => COLUMNS, []);
  const data = useMemo<IData[]>(() => MOCK_DATA, []);

  const tableInstance = useTable<IData>({ columns, data });

  const { getTableProps, getTableBodyProps } = tableInstance;

  const { footerGroups, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <>
      <table {...getTableProps()} style={{ tableLayout: "auto" }}>
        <thead className="ant-table-thead">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()} className="ant-table-cell">
                  {column.render("Header")}
                </th>
              ))}
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
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="ant-table-cell">
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot className="ant-table-footer">
          {footerGroups.map((footerGroup) => (
            <tr
              {...footerGroup.getFooterGroupProps()}
              className="ant-table-row ant-table-row-level-0">
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps} className="ant-table-cell">
                  {column.render("Footer")}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  );
};
// const {
//   getTableProps,
//   getTableBodyProps,
//   headerGroups,
//   footerGroups,
//   rows,
//   prepareRow,
// } = useTable({
//   columns,
//   data,
// });
// return (
//   <>
//     <table {...getTableProps()}>
//       <thead>
//         {headerGroups.map((headerGroup) => (
//           <tr {...headerGroup.getHeaderGroupProps()}>
//             {headerGroup.headers.map((column) => (
//               <th {...column.getHeaderProps()}>{column.render("Header")}</th>
//             ))}
//           </tr>
//         ))}
//       </thead>
//       <tbody {...getTableBodyProps()}>
//         {rows.map((row) => {
//           prepareRow(row);
//           return (
//             <tr {...row.getRowProps()}>
//               {row.cells.map((cell) => {
//                 return (
//                   <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                 );
//               })}
//             </tr>
//           );
//         })}
//       </tbody>
//       <tfoot>
//         {footerGroups.map((footerGroup) => (
//           <tr {...footerGroup.getFooterGroupProps()}>
//             {footerGroup.headers.map((column) => (
//               <td {...column.getFooterProps()}>{column.render("Footer")}</td>
//             ))}
//           </tr>
//         ))}
//       </tfoot>
//     </table>
//   </>
// );
