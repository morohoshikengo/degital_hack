import React from 'react';
import {columns,data} from "./ListData";
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 
import { useTable } from 'react-table'

 function ListContent() {
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow
        } = useTable({
          columns,
          data
        });

        return (
            <table {...getTableProps()}>
              <thead style={{border:1.5}}>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()} 
 >
                        {column.render("Header")}
                        </th>
                    ))}
                  </tr>
                ))}
              </thead>
        
              <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()} >
                             {cell.render("Cell")}
                          </td>
                        )
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
}

export default ListContent