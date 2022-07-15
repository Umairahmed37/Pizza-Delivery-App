import React,{useEffect,useState} from 'react'
import CustomizedTables from './Tables'
import { useSelector,useDispatch } from 'react-redux'
import Spinner from '../Spinner'
import { getallpizzas } from '../../Actions/pizzaActions'


const PizzaList = () => {

  const dispatch = useDispatch()
  const pizzastate = useSelector(state => state.getallpizzasReducer)
  const { pizzas, error, Loading } = pizzastate

  useEffect(() => {
    dispatch(getallpizzas())
     // eslint-disable-next-line
  }, [])

  const headings=[
    {Name:"Name"},
    {Name:"Varient"},
    {Name:"Price"},
    {Name:"Category"},
    {Name:"Actions"}
  
]

 

  return (
    <div >
      {
        Loading && <Spinner/>
      }
         <div className='pt-4'>
          <div className='d-flex justify-content-between'>
            <h2>AdminPanel</h2>
            <h2>pizzaList</h2>
          </div>
        </div>
        <div className='mt-4 shadow mb-5 '>
           <CustomizedTables pizzas={pizzas}  headings={headings}/>
        </div>
    </div>
  )
}

export default PizzaList
