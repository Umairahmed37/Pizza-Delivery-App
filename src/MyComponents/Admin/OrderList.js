import React, { useState } from 'react'
 import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeliverOrder, GetAllOrders } from '../../Actions/orderActions'
import Spinner from '../Spinner'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

const OrderList = () => {

  const dispatch = useDispatch()
  const orderstate = useSelector(state => state.getallorderReducer)
  const { Orders, loading } = orderstate


  useEffect(async () => {
    dispatch(GetAllOrders())


  }, [])

  return (
    <div >
      {
        loading ?
          <div className='mt-5 pt-5'>
            <Spinner />
          </div>
          : <div>

            <div className='pt-4'>
              <div className='d-flex justify-content-between'>
                <h2>AdminPanel</h2>
                <h2>Order List</h2>
              </div>
            </div>
            <div className='mt-4'>

              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>

                    <TableRow>
                      <StyledTableCell className="bg-dark text-white" align='left'>Order ID</StyledTableCell>
                      <StyledTableCell className="bg-dark text-white" align='left'>Name</StyledTableCell>
                      <StyledTableCell className="bg-dark text-white" align='left'>Email</StyledTableCell>
                      <StyledTableCell className="bg-dark text-white" align='left'>Items</StyledTableCell>
                      <StyledTableCell className="bg-dark text-white" align='left'>Total Amount</StyledTableCell>
                      <StyledTableCell className="bg-dark text-white" align='left'>Date</StyledTableCell>
                      <StyledTableCell className="bg-dark text-white" align='left'>Delivered Status</StyledTableCell>
                    </TableRow>

                  </TableHead>
                  <TableBody>

                    {
                      Orders.map((order, i) => {

                        return <StyledTableRow key={i} >
                          <StyledTableCell align="left">{order._id}</StyledTableCell>
                          <StyledTableCell align="left">{order.name}</StyledTableCell>
                          <StyledTableCell align="left">{order.email}</StyledTableCell>
                          <StyledTableCell align="left">
                            {
                              order.orderItems.map((item, i) => {
                                return <div key={i}>
                                  <h6>Item: {item.name}</h6>
                                  <h6>Price:{item.price}</h6>
                                </div>
                              })
                            }
                          </StyledTableCell>
                          <StyledTableCell align="left">{order.orderAmount}</StyledTableCell>
                          <StyledTableCell align="left">{order.createdAt.substring(0, 10)}</StyledTableCell>
                          <StyledTableCell align="left">
                            {order.isDelivered ? <p>Delivered</p> : <p className='btn btn-danger'
                              onClick={() => dispatch(DeliverOrder(order._id))}>
                              Deliver</p>}

                          </StyledTableCell>


                        </StyledTableRow>
                      })
                    }



                  </TableBody>
                </Table>
              </TableContainer>
              {
                Orders.length === 0 && <div className='p-5 border-2 shadow'>No Orders To Show</div>
              }
            </div>
          </div>
      }

    </div>
  )
}

export default OrderList
