import React from 'react'
import Pizza from '../MyComponents/Pizza'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getallpizzas } from '../Actions/pizzaActions'
import Spinner from '../MyComponents/Spinner'
import { isUserLogged } from '../Actions/userActions'
import Filter from '../MyComponents/Filter'


const Homescreen = (props) => {

  const pizzastate = useSelector(state => state.getallpizzasReducer)
  const { pizzas, error, Loading } = pizzastate

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getallpizzas())
    dispatch(isUserLogged())
    // eslint-disable-next-line
  }, [])

  return (


    <div className='text-center'>
      <h2 className='pt-3'>Buy Pizza from the hut!!</h2>

      <Filter />

      {
        Loading ? (
          <div className='text-center mt-5 pt-3'>
            <Spinner />
          </div>
        ) : (
          <div id='pizza' className="mt-3 row row-cols-sm-2 row-cols-md-3   g-4 container-md d-inline-flex">
            {
              pizzas.map((pizza, i) => {
                return (
                  <Pizza key={i} pizza={pizza} />
                )
              })
            }
          </div>

        )
      }


    </div>
  )
}

export default Homescreen
