import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { filterpizza, getallpizzas } from '../Actions/pizzaActions'
import axios from 'axios'




const Filter = () => {

  const [Search, setSearch] = useState('')
  const [type, setType] = useState('all')
  const dispatch = useDispatch()

  const searchpizza = async (e) => {
    e.preventDefault()

    console.log(Search , type);
    if (!Search && (type === "all" || !type)) {
       dispatch(getallpizzas())
    }else{
      dispatch(filterpizza(Search, type))
    }
       

  }

  return (
    <div >
      <form onSubmit={searchpizza} className='row justify-content-center'>

        <div className='col-md-8 mt-2'>
          <div className='row d-flex align-items-center rounded-3 justify-content-sm-center shadow p-2 mb-0 bg-body'>
            <div className='col-md-3 m-2'>
              <input placeholder='Search Pizzas' name='search' onChange={(e) => { setSearch(e.target.value) }} className='form-control filters' type="text" value={Search} />
            </div>
            <div className='col-md-3'>

              <select className='form-control form-select w-100' value={type} onChange={(e) => setType(e.target.value)}>
                <option value="all">All</option>
                <option value="veg">veg pizzas</option>
                <option value="nonveg">non-veg pizzas</option>
              </select>
            </div>
            <div className='col-md-3'>
              <button type='submit' name='form' className='btn btn-danger w-100'>Filter</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Filter
