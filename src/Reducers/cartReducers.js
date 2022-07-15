
export const addtocartReducer = (state = { cartItem: [] }, action) => {

  switch (action.type) {

    case "ADD_TO_CART":
      const alreadyExist = state.cartItem.find(item => item._id === action.payload._id)
      if (alreadyExist) {
        return {
          ...state,
          cartItem: state.cartItem.map(item => item._id === action.payload._id ? action.payload : item)
        }
      } else {
        return {
          ...state,
          cartItem: [...state.cartItem, action.payload]
        }
      }
    case "DELETE_FROM_CART": 
    return{
      ...state, 
      cartItem: state.cartItem.filter(item=>item._id!==action.payload._id)
    }
    case "DELETE_CART":
      return{
        cartItem:[]
      }
    default: return state
  }
}