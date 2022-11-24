import { useState } from "react";
import DashboardNav from "../components/navs/DashboardNav";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FileBase from 'react-file-base64'

function AddProducts() {
  async function handleClick(e) {
    // try {
    //   const response = await axios.post({
    //     'http://localhost:8080/'
    //   })
    // }
    e.preventDefault()
    // try {
    //   const response = await axios.post({
    //     'http://localhost:8080/addNewProduct',
    //     {productName, }
    //   })
    // } 
    // catch(err) {
    //   console.log(err);
    // }
    console.log(imageFile.selectedFile)
    console.log(imageFile.selectedFile.length)
  }

  const [imageFile, setImageFile] = useState({})

  return (
    <>
      <DashboardNav />
      <div>
        <Form className="w-100 mt-5 d-flex flex-column justify-content-center align-items-center">
          <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
            <h3>Add New Product</h3>
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="formBasicPassword">
            <Form.Label>Product Description</Form.Label>
            <Form.Control as="textarea" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
            <Form.Label>Product Price</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
            <Form.Label>Discounted Price (if any)</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
            <FileBase type="file" multiple={false} onChange={e => e.target.files[0]} onDone={({base64}) => setImageFile({selectedFile: base64})} />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleClick}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddProducts;
