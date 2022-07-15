import axios, { Axios } from "axios"
import dateFormat from 'dateformat'

export const orderAction = (cartitems, CurrentUser, subtotal) => async dispatch => {

  const now = new Date()
  const date = dateFormat(now, "fullDate");
  const time = dateFormat(now, "longTime")


  var myOrder = {
    userid: CurrentUser._id,
    name: CurrentUser.name,
    email: CurrentUser.email,
    cartitems,
    subtotal,
    isDelivered: false,
    date,
    time

  }

  dispatch({ type: "ENTER_ORDER", payload: myOrder })

  const response = axios.post('/api/orders/MyOrder', myOrder)

}

export const GetAllOrders = () => async dispatch => {

  dispatch({ type: 'Get-Order-Req' })

  try {
    const orders = await axios.get('/api/orders/getallorders')
    dispatch({ type: 'Get-Order-Success', payload: orders.data })
  } catch (error) {
    dispatch({ type: 'Get-Order-Fail' })
  }

}

export const DeliverOrder = (orderid) => async dispatch => {

  dispatch({ type: 'Get-Order-Req' })
  try {
    const orders = await axios.patch('/api/orders/deliverorder',{orderid})
    const updatedOrders = await axios.get('/api/orders/getallorders')
    dispatch({ type: 'Get-Order-Success' ,payload:updatedOrders.data})

  } catch (error) {
    dispatch({ type: 'Get-Order-Fail' })
  }

}