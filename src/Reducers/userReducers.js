
//USER REGISTER REDUCER
export const UserRegisterReducer = (state = {}, action) => {
   switch (action.type) {
      case "USER_REGISTER_REQ": return {
         loading: true
      }
      case "USER_REGISTER_SUCCESS": return {
         loading: false,
         success: true
      }
      case "USER_REGISTER_FAILED": return {
         loading: false,
         error: action.payload
      }

      default: return state
   }
}

//USER LOGIN AND LOGOUT REDUCER
export const userloginReducer = (state = {}, action) => {
   switch (action.type) {

      case "IS_USER_LOGGED_YES": return {
          loggedIn: true,
      }
      case "IS_USER_LOGGED_NO": return {
         loggedIn: false,
         CurrentUser: {}
     }
      case "USER_LOGIN_REQ": return {
         loading: true,
         loggedIn: false,
      }
      case "USER_LOGIN_SUCCESS": return {
         loading: false,
         success: true,
         loggedIn: true,
         CurrentUser: action.payload
      }
      case "USER_LOGIN_FAILED": return {
         loading: false,
         loggedIn: false,
         error: action.payload
      }
      case "USER_LOGOUT_REQ": return {
         loading: true,
         loggedIn: true,
       }
       
      case "USER_LOGOUT_SUCCESS": return {
         loading: false,
         success: true,
         loggedIn: false,
         CurrentUser: {}
      }
      case "USER_LOGOUT_FAILED": return {
         loading: false,
         loggedIn: true,

         error: action.payload
      }

      default: return state
   }
}


export const getallusers = (state = { users: [] }, action) => {

   switch (action.type) {
 
     case 'GET_ALL_USER_REQUEST':
       return {
         Loading: true,
         ...state
       }
     case 'GET_ALL_USER_SUCCESS':
       return {
         Loading: false,
         users: action.payload
       }
     case 'GET_ALL_USER_FAILED':
       return {
         Loading: false,
         error: action.payload
       }

     default: return state
 
   }
 }
