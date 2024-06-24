import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.scss'



const TableSection = () => {

  const rows = [
    {
      id: 1,
      CustomerName:'Jane cooper',
      Company: 'Microsoft',
      PhoneNo: '(225) 555-0118',
      Email:'jane@microsoft.com',
      country: 'United States',
      status: 'Active'
    },
    {
      id: 2,
      CustomerName:'Jane cooper',
      Company: 'Microsoft',
      PhoneNo: '(225) 555-0118',
      Email:'jane@microsoft.com',
      country: 'United States',
      status: 'Inactive'
    },
    {
      id: 3,
      CustomerName:'Jane cooper',
      Company: 'Microsoft',
      PhoneNo: '(225) 555-0118',
      Email:'jane@microsoft.com',
      country: 'United States',
      status: 'Inactive'
    },
    {
      id: 4,
      CustomerName:'Jane cooper',
      Company: 'Microsoft',
      PhoneNo: '(225) 555-0118',
      Email:'jane@microsoft.com',
      country: 'United States',
      status: 'Active'
    },
    {
      id: 5,
      CustomerName:'Jane cooper',
      Company: 'Microsoft',
      PhoneNo: '(225) 555-0118',
      Email:'jane@microsoft.com',
      country: 'United States',
      status: 'Active'
    },
    {
      id: 6,
      CustomerName:'Jane cooper',
      Company: 'Microsoft',
      PhoneNo: '(225) 555-0118',
      Email:'jane@microsoft.com',
      country: 'United States',
      status: 'Active'
    },
    {
      id: 7,
      CustomerName:'Jane cooper',
      Company: 'Microsoft',
      PhoneNo: '(225) 555-0118',
      Email:'jane@microsoft.com',
      country: 'United States',
      status: 'Inactive'
    },
    // {
    //   id: 8,
    //   CustomerName:'Jane cooper',
    //   Company: 'Microsoft',
    //   PhoneNo: '(225) 555-0118',
    //   Email:'jane@microsoft.com',
    //   country: 'United States'
    // },
    // {
    //   id: 9,
    //   CustomerName:'Jane cooper',
    //   Company: 'Microsoft',
    //   PhoneNo: '(225) 555-0118',
    //   Email:'jane@microsoft.com',
    //   country: 'United States'
    // },
    // {
    //   id: 10,
    //   CustomerName:'Jane cooper',
    //   Company: 'Microsoft',
    //   PhoneNo: '(225) 555-0118',
    //   Email:'jane@microsoft.com',
    //   country: 'United States'
    // }
  ]
  return (
    <div>
      <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tabelecell"> Id</TableCell>
            <TableCell className="tabelecell">Customer Name</TableCell>
            <TableCell className="tabelecell">Company</TableCell>
            <TableCell className="tabelecell">Phone Number</TableCell>
            <TableCell className="tabelecell">Email</TableCell>
            <TableCell className="tabelecell">Country</TableCell>
            <TableCell className="tabelecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell align="left">{row.CustomerName}</TableCell>
              <TableCell align="left">{row.Company}</TableCell>
              <TableCell align="left">{row.PhoneNo}</TableCell>
              <TableCell align="left">{row.Email}</TableCell>
              <TableCell align="left">{row.country}</TableCell>
              <TableCell align="left"><button >{row.status}</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default TableSection