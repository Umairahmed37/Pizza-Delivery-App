import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
 import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'


const Adminscreen = () => {

  const navigate = useNavigate()
  const mystate = useSelector(state => state.userloginReducer)
  const { CurrentUser } = mystate

  useEffect(() => {
    if (!CurrentUser.isAdmin) {
      navigate('/')
      swal('Only Admins can access')
    }

  }, [])

  return (
    <div className='d-flex justify-content-center'>
      <div className='col-md-10 text-center '>
         <div className='admindiv shadow p-3  rounded'>
          <ul>
            <li><Link to="/Admin/ManageUsers">Users</Link> </li>
            <li><Link to="/Admin/ManagePizzas">Pizzas</Link></li>
            <li><Link to="/Admin/NewPizza">Add New Pizza</Link></li>
            <li><Link to="/Admin/ManageOrders">Orders</Link></li>
          </ul>
        </div>

      <Outlet/>

        

      </div>
    </div>
  )
}

export default Adminscreen
