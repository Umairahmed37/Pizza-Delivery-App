import React, { useEffect } from 'react'
import { addtocartReducer } from '../Reducers/cartReducers'
import { useSelector } from 'react-redux'
import { MyorderReducer } from '../Reducers/orderReducers'

const MyOrders = () => {

  const anyorder = useSelector(state => state.addtocartReducer)
  const { cartItem } = anyorder

  const orderstate = useSelector(state => state.MyorderReducer)
  const { myOrder } = orderstate


  

  return (
    <div className='text-center'>

      {
        cartItem.length === 0 && <h2 className='pt-5'>No items in cart</h2>
      }
      <h2>My Orders</h2>
      <hr />
      {
        myOrder.map((order, i) => {
          return <div key={i} className='container mycartitems'>

            <div className='row justify-content-evenly'>
              <div className='col-md-4'>
                <h3>User Detail</h3>
                <hr />
                <div className='text-start'>

                  Username: {order.name} <br />
                  Email: {order.email} <br />
                  User ID: {order.id} <br />

 
                </div>

              </div>
              <div className='col-md-4'>
                <h3>Item Details</h3>
                <hr />

                {
                  order.cartitems.map((items, i) => {
                    return <div className='text-start'>
                      <b>Name:</b> {items.name} <br />
                      Item Price: {items.price}
                    </div>
                  })

                }</div>
              <div className='col-md-4'>
                <h3>Order Details</h3>
                <hr />
                <div className='orderdetail'>
                Total Amount: {order.subtotal} <br />
                Date: {order.date} <br />
                Time: {order.time} <br />
                <div  className='btn shopbutton mt-4'>Status: Pending</div>
                </div>
              </div>
            </div>


          </div>

        })
      }




    </div>
  )
}

export default MyOrders
