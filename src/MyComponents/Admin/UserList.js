import React,{useEffect} from 'react'
import Spinner from '../Spinner'
import CustomizedTables from './Tables'
import { useDispatch, useSelector } from 'react-redux'
import { getallusers } from '../../Actions/userActions'

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
 
const UserList = () => {


  const dispatch = useDispatch()
  const userstate = useSelector(state => state.getallusers)
  const {users,Loading} = userstate

  useEffect(() => {
    dispatch(getallusers())
  }, [])

  return (
    <div>
      {
        Loading ? <div className='mt-5 pt-5'>
          <Spinner />
        </div> :
        <div>

        <div className='pt-4'>
          <div className='d-flex justify-content-between'>
            <h2>AdminPanel</h2>
            <h2>Users List</h2>
          </div>
        </div>
        <div className='mt-4'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="  table" className='table-responsive'>
              <TableHead>

                <TableRow>
                  <StyledTableCell className="bg-dark text-white" align='left'>User ID</StyledTableCell>
                  <StyledTableCell className="bg-dark text-white" align='left'>Name</StyledTableCell>
                  <StyledTableCell className="bg-dark text-white" align='left'>Email</StyledTableCell>
                  <StyledTableCell className="bg-dark text-white" align='left'>Is Admin</StyledTableCell>
                </TableRow>

              </TableHead>
              <TableBody>

                {
                  users.map((user, i) => {

                    return <StyledTableRow key={i} >
                      <StyledTableCell align="left">{user._id}</StyledTableCell>
                      <StyledTableCell align="left">{user.name}</StyledTableCell>
                      <StyledTableCell align="left">{user.email}</StyledTableCell>
                      <StyledTableCell align="left">
                        {user.isAdmin ? <p className='btn btn-danger'>Admin</p>: <p className='btn btn-success'>User</p> }
                      </StyledTableCell>

                    </StyledTableRow>
                  })
                }



              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      }
      
    </div>
  )
}

export default UserList
