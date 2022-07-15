import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'


//GET ALL PIZZA FROM THE BACKEND
export const getallpizzas = () => async dispatch => {
  dispatch({ type: 'GET_PIZZA_REQUEST' })

  try {
    const response = await axios.get("/api/getallpizzas")
    dispatch({ type: 'GET_ALL_PIZZA_SUCCESS', payload: response.data })
  } catch (error) {
    dispatch({ type: 'GET_ALL_PIZZA_FAILED', payload: error.message })
  }
}

//FILTER THE PIZZAS 
export const filterpizza = (Search, type) => async dispatch => {

  dispatch({ type: 'GET_PIZZA_REQUEST' })
  var filteredpizza;

  try {
    const response = await axios.get("/api/getallpizzas")

    filteredpizza = response.data.filter(pizza => pizza.name.toLowerCase().includes(Search))
    if (type !== 'all') {
      filteredpizza = await filteredpizza.filter(pizza => pizza.category.toLowerCase() === type)
    }

    dispatch({ type: 'GET_ALL_PIZZA_FILTERED', payload: filteredpizza })

  } catch (error) {
    dispatch({ type: 'GET_ALL_PIZZA_FAILED', payload: error.message })

  }
}


//ADD THE PIZZAS
export const AddpizzaAction = (pizza) => async dispatch => {
  dispatch({ type: 'ADD_PIZZA_REQ' })
  try {
    const response = await axios.post("/api/AddPizza", { pizza })
    dispatch({ type: 'ADD_PIZZA' })
  } catch (error) {
    dispatch({ type: 'ADD_PIZZA_ERROR', payload: error.message })
  }
}


export const Getpizzabyid = (id) => async dispatch => {
  dispatch({ type: 'GET_PIZZABYID_REQUEST' })
  //goood id is received
  try {
    const response = await axios.post("/api/updatepizza", { id })
    dispatch({ type: 'GET_ALL_PIZZABYID_SUCCESS', payload: response.data })
  } catch (error) {
    dispatch({ type: 'GET_ALL_PIZZABYID_FAILED', payload: error.message })
  }
}

export const updatepizza = (pizza) => async dispatch => {
  dispatch({ type: 'UPDATE-REQ' })
  try {
    const response = await axios.post("/api/updatefinal", { pizza })
    dispatch({ type: 'UPDATE-SUCCESS', payload: response.data })
  } catch (error) {
    dispatch({ type: 'UPDATE-ERROR', payload: error.message })
  }
}

export const deletepizza = (id) => async (dispatch) => {

  // const mystate = getState().getallpizzasReducer
  // console.log(mystate.pizzas);
  dispatch({ type: 'DELETE-REQ' })

  try {

    // const response = await axios.get("/api/getallpizzas")
    // const newpizzas= response.filter(items=>items._id!==id)
    const response = await axios.post("/api/deletepizza", { id })
    dispatch({ type: 'DELETE-SUCCESS' })
    swal('Deleted Sucessfully')
  } catch (error) {
    dispatch({ type: 'DELETE-ERROR', payload: error.message })
  }
}