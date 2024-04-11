import React from "react";
import { MdMargin } from "react-icons/md";
import { useTable } from "react-table";

const EventTable = ({ columns, data, bgcolor }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table
      {...getTableProps()}
      style={{ border: "solid 1px violet", borderCollapse: "collapse"}}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: "solid 1px voilet",
                  background: bgcolor,
                  padding: "10px 20px",
                  gap:"10px",
                  fontWeight: "bold",
                  textAlign: "start",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                        padding: " 10px 17px",
                        margin: "0 10px",
                      borderBottom: "solid 1px violet",
                      textAlign: "start",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default EventTable;
