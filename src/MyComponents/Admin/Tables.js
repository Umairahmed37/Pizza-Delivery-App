import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { styled } from '@mui/material/styles';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { deletepizza } from '../../Actions/pizzaActions';
import Paper from '@mui/material/Paper';
import swal from 'sweetalert';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.danger,
    color: theme.palette.common.black,
    fontWeight: '900'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

 

export default function CustomizedTables(props) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

   
  const deleteitem = (id) => {
    const x = window.confirm("delete?")
    if (x) {
      dispatch(deletepizza(id))
    }}
  
     
  
   
   

  return (
    <TableContainer component={Paper}>
       <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>

          <TableRow>
            {
              props.headings.map((heading,i) => (
                <StyledTableCell key={i} className="bg-success" align='left'>{heading.Name.toUpperCase()}</StyledTableCell>

              ))
            }
          </TableRow>

        </TableHead>
        <TableBody>
          {props.pizzas.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell align="left">{row.name}</StyledTableCell>

              <StyledTableCell align="left">

                {
                  row.varients.map((value, i) => (
                    <div key={i}>
                      {row.varients[i]}
                    </div>

                  ))
                }

              </StyledTableCell>
              <StyledTableCell align="left">
                {
                  row.prices.map((value, i) => (
                    <div key={i}>
                      Small: {value.small} /- <br />
                      Medium: {value.medium} /-<br />
                      Large: {
                        value.large == 0 ? <span>Not Available</span> : value.large
                      }


                    </div>

                  ))
                }
              </StyledTableCell>
              <StyledTableCell align="left">{row.category}</StyledTableCell>
              <StyledTableCell align="left">
                <div className='p-3' style={{ fontSize: "25px" }}>


                  <i style={{ cursor: "pointer" }} className='fa fa-trash m-2 text-danger'
                    onClick={() => deleteitem(row._id)}>
                  </i>



                  <Link to={`/Admin/EditPizza/${row._id}`}>
                    <i className='fa fa-edit m-2 text-success'></i>
                  </Link>
                </div>

              </StyledTableCell>

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
