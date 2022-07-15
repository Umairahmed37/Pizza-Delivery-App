import React, { useState } from 'react'
import { AddpizzaAction } from "../../Actions/pizzaActions"
import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
 
const AddPizza = () => {

  const [state, setState] = useState([{ pname: '', sprice: '', mprice: '', lprice: '', img: '', desc: '', category: '' }])
  const { pname, sprice, mprice, lprice, img, desc, category } = state

  const navigate=useNavigate()
  const dispatch = useDispatch()

  const handlesubmit = (e) => {
    e.preventDefault();

    const pizza = {
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
    dispatch( AddpizzaAction(pizza))
     setState({ pname: '', sprice: '', mprice: '', lprice: '', img: '', desc: '', category: '' })
     navigate('/')
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <div className='pt-4 d-flex row justify-content-center'>
        <div className='d-flex justify-content-between'>
          
          <h2>AdminPanel</h2>
          <h2>Add Pizza</h2>
        </div>
        <hr />
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
            Add pizza
          </Button>
        </Form>
      </div>

    </div>
  )
}

export default AddPizza
