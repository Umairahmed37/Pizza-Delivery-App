import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addtocart, deletefromcart } from '../Actions/cartActions'
import swal from 'sweetalert'
import { useEffect } from 'react'
import { orderAction } from '../Actions/orderActions'


const Cart = () => {

  const dispatch = useDispatch()
  const cartstate = useSelector(state => state.addtocartReducer)
  const cartitems = cartstate.cartItem

  const loging = useSelector(state => state.userloginReducer)
  const { loggedIn, CurrentUser } = loging



  var subtotal = cartitems.reduce((x, item) => x = x + item.price, 0)

  const deleteitem = value => {
    console.log(value);
    const confirm = window.confirm("Delete from the cart ? ")
    if (confirm) {
      dispatch(deletefromcart(value))
    }
  }

 

  const checkout = () => (
    loggedIn ? !cartitems.length==0 ? (
       dispatch(orderAction(cartitems, CurrentUser,subtotal))
  ) : (swal("Cart is Empty"))
      : (swal("you must be logged In to continue"))
  )

  return (
    <div className='row pt-3'>
      <h1 className='text-center'>Your Cart</h1>

      <div className='col-md-8 mt-3'>
        <hr className='container w-75 mt-3' />
        {
          cartitems.map((items, i) => {

            return <div key={i} className='mx-auto w-75 row'>
              <div className='col-md-8 align-self-center'>

                <h5 className='mx-auto'>{items.name}
                  <span>[{items.varient}]</span>
                </h5>

                <h5>Price = {items.quantity} * {items.prices[0][items.varient]} = {items.price ? items.price : "No Item Selected"}</h5>

                <h5>Quantity = &nbsp;

                  <i className="fa fa-plus"
                    style={{ "cursor": "pointer" }}
                    onClick={() => { dispatch(addtocart(items, items.varient, items.quantity + 1)) }}>
                    &nbsp;
                  </i>

                  {items.quantity}

                  <i>&nbsp;</i>
                  <i

                    style={{ "cursor": "pointer" }}
                    onClick={() => { dispatch(addtocart(items, items.varient, items.quantity - 1)) }}
                    className="fa fa-minus"> </i>


                </h5>
              </div>
              <div className='col-md-3 align-self-center'>
                <img className='rounded img-fluid im' width="180px" height="150px" src={items.image} alt="" />
              </div>
              <div className='col-md-1 align-self-center'>
                <i id="fa" className="fa fa-trash" onClick={() => deleteitem(items)}></i>
              </div>

              <hr className='mt-3' />

            </div>
          })
        }


      </div>
      <div className='col-md-4 mt-5'>
        <h1>
          Subtotal
        </h1>
        <h4 className='ml-3' >{subtotal}/-</h4>
        <button onClick={checkout} className="btn btn-danger">Check Out</button>

      </div>

    </div>
  )
}

export default Cart
