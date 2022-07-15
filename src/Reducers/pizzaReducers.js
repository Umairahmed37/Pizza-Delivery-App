//SWEET DREAMS
export const getallpizzasReducer = (state = { pizzas: [] }, action) => {

  switch (action.type) {

    case 'GET_PIZZA_REQUEST':
      return {
        Loading: true,
        ...state
      }
    case 'GET_ALL_PIZZA_SUCCESS':
      return {
        Loading: false,
        pizzas: action.payload
      }
    case 'GET_ALL_PIZZA_FAILED':
      return {
        Loading: false,
        error: action.payload
      }
    case 'GET_ALL_PIZZA_FILTERED':
      return {
        Loading: false,
        pizzas: action.payload
      }
    case 'DELETE-SUCCESS_NEW':
      return {
        Loading: true,
        ...state
      }

    default: return state

  }
}

export const updatefinalReducerr = (state = {}, action) => {
  switch (action.type) {

    case 'UPDATE-REQ':
      return {
        Loading: true,
        ...state
      }
    case 'UPDATE-SUCCESS':
      return {
        Loading: false,
        pizza: action.payload
      }
    case 'UPDATE-ERROR':
      return {
        Loading: false,
        error: action.payload
      }
    default: return state
  }
}

export const UpdatepizzaReducer = (state = {}, action) => {
  switch (action.type) {

    case 'GET_PIZZABYID_REQUEST':
      return {
        Loading: true,
        ...state
      }
    case 'GET_ALL_PIZZABYID_SUCCESS':
      return {
        Loading: false,
        pizza: action.payload
      }
    case 'GET_ALL_PIZZABYID_FAILED':
      return {
        Loading: false,
        error: action.payload
      }
    default: return state
  }
}


export const addpizzaReducer = (state = [], action) => {

  switch (action.type) {
    case "ADD_PIZZA_REQ": return {
      Loading: true,
      ...state
    }
    case "ADD_PIZZA_SUCCESS": return {
      Loading: false,
    }
    case "ADD_PIZZA_ERROR": return {
      Loading: true,
      error: action.payload
    }
    default: return state
  }
}



export const deletepizzaReducer = (state = {}, action) => {

   
  switch (action.type) {
    case "DELETE-REQ": return {
      Loading: true,
      ...state
    }
    case "DELETE-SUCCESS": return {
      Loading: false,

    }
    case "DELETE-ERROR": return {
      Loading: true,
      error: action.payload
    }
    default: return state
  }
}



