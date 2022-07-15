import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userlogin } from '../Actions/userActions'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'


const Login = () => {

  let navigate = useNavigate()

  useEffect(() => {
    localStorage.getItem('CurrentUser') &&
      (navigate('/'))
  }, [])


  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [email, setEmail] = useState("")


  function handlesubmit(e) {
    e.preventDefault()
    const user = {
      name,
      email
    }
    dispatch(userlogin(user))
    swal('Logged In Successfully')
    navigate('/')

    setName('')
    setEmail('')
  }


  return (
    <div className='login row justify-content-center text-center text-muted pt-5'>
      <div className='col-md-6'>
        <h2>Login User</h2>
        <div className='m-5'>
          <form onSubmit={handlesubmit} >

            <input onChange={(e) => setName(e.target.value)} name='name' value={name} required type="text" placeholder='Name' className='form-control' />
            <input onChange={(e) => setEmail(e.target.value)} autoComplete='false' name='email' value={email} required type="email" placeholder='Email' className='form-control' />
            <div className='d-flex justify-content-evenly'>

              <button type="submit" className="btn col-sm-3 btn-danger">Login</button>

              <div className='col-sm-9 d-flex justify-content-end'>
                <p className='mt-2'>No Account ?</p> <span> <Link className="nav-link " to="/Signup">Signup Here</Link></span>
              </div>
            </div>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Login
