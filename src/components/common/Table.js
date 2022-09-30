import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

export default function CommonTable({ title, headers, rows }) {
  const getTableRow = (row) => (
    <TableRow key={row.id}>
      {row.fields.map((field) => (
        <TableCell>{field}</TableCell>  
      ))}
    </TableRow>
  );
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => getTableRow(row))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
