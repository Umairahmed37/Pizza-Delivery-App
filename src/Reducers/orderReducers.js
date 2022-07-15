

export const MyorderReducer = (state = { myOrder: [] }, action) => {


  switch (action.type) {
    case "ENTER_ORDER": return {
      ...state,
      myOrder: [...state.myOrder, action.payload]
    }

    default: return state
  }
}

export const getallorderReducer = (state = {Orders:[]}, action) => {

  switch (action.type) {
    case 'Get-Order-Req':return{
      ...state, 
      loading:true
    }
    case 'Get-Order-Success':return{
      ...state, 
      loading:false,
      Orders:action.payload
    }
    case 'Get-Order-Fail':return{
      ...state, 
      loading:true,
      error:action.payload
    }
    default: return state
  }
}