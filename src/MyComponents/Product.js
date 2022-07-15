import React from 'react'
import { Modal,Button } from 'react-bootstrap'

  
const Product = (props) => {

  const {show,setShow,pizza}=props
  const handleClose = () => setShow(false);
 

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img  
          className="card-img-top img-responsive" style={{ width: '100%', height: '300px',objectFit:'cover' }}  
           src={pizza.image} alt="Pizza " />
          <p className='mt-3'><b>Pizza Description</b> <br />{pizza.description}</p>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Product
