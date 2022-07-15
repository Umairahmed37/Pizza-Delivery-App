import React from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userlogin, userlogout } from '../Actions/userActions'
import swal from 'sweetalert'


const Navbar = (props) => {

  const cartstate = useSelector(state => state.addtocartReducer);
  const mystate = useSelector(state => state.userloginReducer);
  const { CurrentUser, loggedIn } = mystate;

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const logoutuser = () => {
    dispatch(userlogout());
    navigate('/')
  }

  const login = next => {
     next()
  }

  // useEffect(() => {
  //   navigate('/')
  // }, [loggedIn])

  

  return (
    <div>

      <nav className="navbar mb-5 ">
      </nav>
      <nav className="navbar fixed-top navbar-expand-sm shadow mb-5 bg-white rounded">


        <div className="container">

          <Link className="navbar-brand" to="/">Pizza Hub</Link>

          <Link  className="nav-link"  to="/Admin">Admin </Link>
 

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <FontAwesomeIcon icon={faCoffee} />
          </button>


          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">


            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">
              </button>
            </div>

            <div className="offcanvas-body flex-row-reverse">
              <ul className="navbar-nav justify-content-end">
                <div className="navbar-nav">

                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  {
                    !localStorage.getItem("CurrentUser") &&
                    (<Link onClick={() => login(() => navigate('/'))} className="nav-link" to="/Login">Login</Link>)

                  }
                  <Link className="nav-link" to="/Cart">My Cart {cartstate.cartItem.length} </Link>

                  {
                    localStorage.getItem("CurrentUser") ? (
                      <div className="btn-group">

                        <button
                          type="button"
                          className="btn dropdown-toggle "
                          data-bs-toggle="dropdown"
                          aria-expanded="false">
                          {CurrentUser.name.toUpperCase()}

                        </button>
                        <ul className="dropdown-menu   dropdown-menu-end" data-bs-popper="none">
                          <li><Link className="dropdown-item" to="/MyOrders" type="button">Orders</Link></li>
                          <li>
                            <button className='dropdown-item' onClick={logoutuser} type="button"> Log Out
                            </button>

                          </li>
                        </ul>
                      </div>
                    )
                      : (
                        <div></div>
                      )
                  }




                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Navbar
