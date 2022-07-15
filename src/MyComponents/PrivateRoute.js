import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

const PrivateRoute = ({component:Component}) => {

  const adminstate= useSelector(state=>state.userloginReducer)
  const {CurrentUser} = adminstate
  // console.log(element);
  console.log(Component);
 
  const navigate= useNavigate()
  
  return (
    <div>

      {
        CurrentUser.isAdmin ? (
        <Component {...Component}/>
        )
        :(
           navigate('/')
           )
      }
    </div>
  )
}

export default PrivateRoute
