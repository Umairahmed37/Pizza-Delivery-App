import axios from 'axios'
 import swal from 'sweetalert'
 
//USER ACTIONS FOR THE REGISTER
export const userRegister = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQ" })
  try {
    const response = await axios.post("api/user/register", user)
     dispatch({ type: "USER_REGISTER_SUCCESS" })
     swal("Great!", "Account Created Successfully!", "success");
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error })
  }
 }


// USER ACTION FOR LOGIN

export const userlogin = (user) => async (dispatch) => {
   dispatch({ type: "USER_LOGIN_REQ" })
  try {
    const response = await axios.post("api/user/login", user)
    dispatch({ type: "USER_LOGIN_SUCCESS" , payload:response.data})
    localStorage.setItem('CurrentUser', JSON.stringify(response.data))
 
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error })
  }
}

//USER ACTION FOR LOGOUT ACTIONS
export const userlogout = () => async (dispatch) => {

   dispatch({ type: "USER_LOGOUT_REQ" })
 try {

   dispatch({ type: "USER_LOGOUT_SUCCESS" })
   localStorage.removeItem('CurrentUser')
   swal("Great!", "Logged Out!", "success");
   dispatch({ type: "DELETE_CART" })

   

 } catch (error) {
   dispatch({ type: "USER_LOGOUT_FAILED", payload: error })
 }
}

export const isUserLogged = () =>dispatch=>{
  const yes= JSON.parse(localStorage.getItem('CurrentUser'))

  if(yes){
    dispatch({type: "IS_USER_LOGGED_YES"})
    dispatch({type: "USER_LOGIN_SUCCESS",payload:yes})

  }else{

    dispatch({type: "IS_USER_LOGGED_NO"})
 
  }
     
}

export const getallusers = () => async dispatch => {
  dispatch({ type: 'GET_ALL_USER_REQUEST' })
  try {
    const response = await axios.get("/api/user/getallusers")
    dispatch({ type: 'GET_ALL_USER_SUCCESS', payload: response.data })
  } catch (error) {
    dispatch({ type: 'GET_ALL_USER_FAILED', payload: error.message })
  }
}