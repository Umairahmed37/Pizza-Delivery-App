import React, { useEffect,useState } from 'react'
 import { useDispatch,useSelector } from 'react-redux';
  import swal from 'sweetalert'
import { Form, Button, Spinner } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { updatepizza } from '../../Actions/pizzaActions';
 import { Getpizzabyid } from '../../Actions/pizzaActions'

const EditPizza = () => {

  const [state, setState] = useState([{ pname: '', sprice: '', mprice: '', lprice: '', img: '', desc: '', category: '' }])
  const { pname, sprice, mprice, lprice, img, desc, category } = state


  const navigate=useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const { id } = params

  const statepizza = useSelector(state => state.UpdatepizzaReducer)
  const {pizza,Loading} = statepizza
 
  useEffect(() => {
    dispatch(Getpizzabyid(id))
  }, [])

  useEffect(() => {
      if(pizza){
       if(pizza._id==id){
         setState({
           pname:pizza.name,
           sprice:pizza.prices[0]['small'],
           mprice:pizza.prices[0]['medium'],
           lprice:pizza.prices[0]['large'],
           img:pizza.image,
           desc:pizza.description,
           category:pizza.category
          })
       }else{
        dispatch(Getpizzabyid(id))
       }
    }
  }, [dispatch,pizza])

  const handlesubmit = (e) => {
    e.preventDefault();
 
    const finalpizza = {
      _id:pizza._id,
      name: pname,
      image: img,
      description: desc,
      category,
      price: [{
        small: sprice,
        medium: mprice,
        large: lprice
      }]
    }

    dispatch(updatepizza(finalpizza))
     setState({ pname: '', sprice: '', mprice: '', lprice: '', img: '', desc: '', category: '' })
     navigate('/')
     swal('Update Successfully')
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div>
        <h2 className='mt-3'>Edit Pizza</h2>
      </div>
      <div className='pt-4 d-flex row justify-content-center'>
        <div className='d-flex justify-content-between'>

          <h2>AdminPanel</h2>
          <h2>Add Pizza</h2>
        </div>
        {
          Loading ? <Spinner/>:(
        
        <Form className='col-md-6 shadow mt-3 p-5 mb-5' onSubmit={handlesubmit}>

          <Form.Group className="mb-3">
            <Form.Control value={pname} name='pname' onChange={handleChange} type="text" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" onChange={handleChange} value={sprice} name="sprice" placeholder="Enter Price for small varient" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" onChange={handleChange} value={mprice} name="mprice" placeholder="Enter Price for medium varient" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="text" onChange={handleChange} value={lprice} name="lprice" placeholder="Enter Price for large varient" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control type="Select" onChange={handleChange} value={category} name="category" placeholder="Enter Category" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control value={img} name='img' onChange={handleChange} type="text" placeholder="Enter image URL" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control value={desc} name='desc' onChange={handleChange} type="text" placeholder="Enter Description" />
          </Form.Group>

          <Button variant="danger" type="submit">
            Update Pizza
          </Button>
        </Form>
          )}
      </div>

    </div>
  )
}

export default EditPizza
