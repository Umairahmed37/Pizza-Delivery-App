import React from 'react'
import Button from '@mui/material/Button';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { useState } from 'react'
import Product from './Product';
import { useDispatch } from 'react-redux';
import { addtocart } from '../Actions/cartActions';

const Pizza = (props) => {
  const [varient, setVarient] = useState('small')
  const [quantity, setQuantity] = useState(1)
  const [show, setShow] = useState(false);
  const { pizza } = props


  const dispatch = useDispatch()
  const addincart = () => {
    dispatch(addtocart(pizza, varient, quantity))
  }

  return (
    <>
      <div className="col">

        <div className="card h-100 shadow-lg rounded">
          {
            show ? <Product pizza={pizza} show={show} setShow={setShow} /> : ''
          }

          <div onClick={() => setShow(true)} >
            <img src={pizza.image} className="card-img-top img-responsive" style={{ width: '100%', height: '300px', cursor: 'pointer' }} alt="loading " />
            <h5 style={{ cursor: "pointer" }} className=" btncard-title pt-3 ">{pizza.name}</h5>
          </div>

          <div className="card-body d-inline-flex">
            <div className='w-100'>
              <h6  >Varients :</h6>

              <FormControl sx={{ minWidth: "160px" }} >
                <InputLabel  id="demo-simple-select-label">Select</InputLabel>
                <Select
                  value={varient}
                  onChange={(e) => setVarient(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Varient">

                  {
                    pizza.varients.map((varient, i) => {
                      return <MenuItem key={i} value={varient}> {varient} </MenuItem>
                    })
                  }
                </Select>
              </FormControl>

            </div>
            <div className='w-100'>
              <h6 >Quantity:</h6>

              <FormControl sx={{ minWidth: "150px" }} >
                <InputLabel id="demo-simple-select-label">Select</InputLabel>
                <Select
                 
                  defaultValue={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Select">
                  {
                    [...Array(10).keys()].map((x, i) => {
                      return <MenuItem key={i} value={i + 1}>{i + 1} </MenuItem>
                    })

                  }

                </Select>
              </FormControl>



            </div>
          </div>
          <div className='d-inline-flex justify-content-evenly'>

            <div className='mt-1 mb-5'>
              <Button style={{ cursor: 'default' }} color="success" size="sm" variant="">
                Price = {

                  !pizza.prices[0][varient] * quantity ? "Choose" :
                    pizza.prices[0][varient] * quantity
                }/-</Button>
            </div>

            <div className='mt-1 mb-5'>
              <Button
                size='sm'
                color="error"
                variant="contained"
                onClick={addincart}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </div>






      </div>
    </>
  )
}

export default Pizza
