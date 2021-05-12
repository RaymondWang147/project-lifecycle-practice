import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from '../../data/MOCK_DATA.json';
import { tableColumn } from '../../data/tableColumn';

const BasicTable = () => {
  const columns = useMemo(() => tableColumn, []);
  const data = useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable({
    //@ts-ignore
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BasicTable;
