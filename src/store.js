
import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { getallpizzasReducer } from './Reducers/pizzaReducers'
import { addtocartReducer } from './Reducers/cartReducers'
import { UserRegisterReducer } from './Reducers/userReducers'
import { userloginReducer } from './Reducers/userReducers'
import { MyorderReducer } from './Reducers/orderReducers'
import { addpizzaReducer } from './Reducers/pizzaReducers'
import { UpdatepizzaReducer } from './Reducers/pizzaReducers'
import { deletepizzaReducer } from './Reducers/pizzaReducers'
import { updatefinalReducerr } from './Reducers/pizzaReducers'
import { getallorderReducer } from './Reducers/orderReducers'
import { getallusers } from './Reducers/userReducers'
 

const finalReducer = combineReducers({
  getallpizzasReducer,
  addtocartReducer,
  UserRegisterReducer,
  userloginReducer,
  MyorderReducer,
  addpizzaReducer,
  UpdatepizzaReducer,
  updatefinalReducerr,
  deletepizzaReducer,
  getallorderReducer,
  getallusers
  
  
   
})

const CurrentUser= localStorage.getItem('CurrentUser')? JSON.parse(localStorage.getItem('CurrentUser')) :{}

const initialState = {
  userloginReducer: {
    CurrentUser
  }
}

const composeEnhancer = composeWithDevTools({})
const store = createStore(finalReducer, initialState, composeEnhancer(applyMiddleware(thunk)))
export default store
