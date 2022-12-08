import { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FileBase from "react-file-base64";
import AdminNav from "../components/navs/AdminNav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddProducts() {
  async function handleClick(event) {
    event.preventDefault();
    const productName = event.target[0].value;
    const productDescription = event.target[1].value;
    const productActualPrice = event.target[2].value;
    const productDiscountedPrice = event.target[3].value;
    const imageCode = imageFile.selectedFile;

    const data = {
      productName,
      productDescription,
      productActualPrice,
      productDiscountedPrice,
      productImage: imageCode
    };

    try {
      const response = await axios.post(
        'http://localhost:8080/addNewProduct', data
      )
      toast("New Product Added!");
      console.log(response)
    }
    catch(err) {
      console.log(err);
    }
    // console.log(imageFile.selectedFile);
    // console.log(imageFile.selectedFile.length);
  }

  const [imageFile, setImageFile] = useState({});

  return (
    <>
      <AdminNav />
      <div>
        <Form
          className="w-100 mt-5 d-flex flex-column justify-content-center align-items-center"
          onSubmit={handleClick}
        >
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
            <FileBase
              type="file"
              multiple={false}
              onChange={(e) => e.target.files[0]}
              onDone={({ base64 }) => setImageFile({ selectedFile: base64 })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <ToastContainer/>
      </div>
    </>
  );
}

export default AddProducts;
