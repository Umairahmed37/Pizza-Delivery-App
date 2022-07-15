
export const addtocart=(pizza, varient, quantity)=> (dispatch, getState) => {

  var cartItem = {
    name: pizza.name,
    _id: pizza._id,
    price: pizza.prices[0][varient] * quantity,
    prices: pizza.prices,
    image: pizza.image,
    varient: varient,
    quantity: quantity,
  }

  dispatch({ type: "ADD_TO_CART", payload: cartItem })


 
}

export const deletefromcart=(pizza)=>dispatch=>{

  dispatch({type:"DELETE_FROM_CART" , payload:pizza} )

}