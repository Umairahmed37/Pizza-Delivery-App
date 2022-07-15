import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { userRegister } from '../Actions/userActions'
 
const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpass, setConfirmpass] = useState('')

  const dispatch = useDispatch()
 
   function handlesubmit(e){
     e.preventDefault()
     if(password!==confirmpass){
       alert("Passwords dont match")
     }else{
       const user={
         name,
         email,
         password
       }
       dispatch(userRegister(user))

       setName('')
       setPassword('')
       setEmail('')
       setConfirmpass('')
     }
   }

  return (
    <div className='signup row justify-content-center text-center text-muted pt-5'>
      <div className='col-md-5'>
        <h2>Register New User</h2>
        <div className='m-5'>
          <form onSubmit={handlesubmit} >

            <input onChange={(e)=>setName(e.target.value)} name='name' value={name} required type="text" placeholder='Name' className='form-control' />
            <input onChange={(e)=>setEmail(e.target.value)} autoComplete='false' name='email' value={email} required type="email" placeholder='Email' className='form-control' />
            <input onChange={(e)=>setPassword(e.target.value)}   value={password} required type="password" placeholder='Password' className='form-control' />
            <input onChange={(e)=>setConfirmpass(e.target.value)}  value={confirmpass} required type="Password" placeholder='Confirm Password' className='form-control' />
             <button type="submit" className="btn btn-danger">Register</button>

          </form>
        </div>

      </div>

    </div>
  )
}

export default Signup
