import { useState } from "react";
import axios from "axios";
import { Form, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminNav from "../components/navs/AdminNav";

function EditProducts() {
  const [productId, setProductId] = useState(null);
  const [productDetails, setProductDetails] = useState({});
  const [deleteText, setDeleteText] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  async function handleClick(e) {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/getProductDetailsById/${productId}`
      );
      console.log(response.data);
      setProductDetails(response.data);
    } catch (err) {
      alert("Cannot find product. Try again!");
      console.log(err);
    }
  }

  async function handleDelete(e) {
    e.preventDefault();
    try {
      const request = await axios.delete(
        `http://localhost:8080/deleteProductDetails/${productId}`
      );
      setIsDeleted(true);
      setDeleteText("Item deleted successfully!");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <AdminNav />
      <Form
        className="w-100 mt-5 d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleClick}
      >
        <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
          <Form.Label>Enter Product ID</Form.Label>
          <Form.Control
            className="mb-2"
            type="text"
            placeholder=""
            onChange={(e) => setProductId(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Get Product
          </Button>
        </Form.Group>
      </Form>
      {Object.keys(productDetails).length !== 0 && (
        <div className="mt-5 w-100 d-flex flex-column justify-content-center align-items-center">
          <table className="table table-bordered w-25">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>{productDetails.productName}</th>
              </tr>
              <tr>
                <th>Product Description</th>
                <th>{productDetails.productDescription}</th>
              </tr>
              <tr>
                <th>Product Actual Price</th>
                <th>{productDetails.productActualPrice}</th>
              </tr>
              <tr>
                <th>Product Discounted Price</th>
                <th>{productDetails.productDiscountedPrice}</th>
              </tr>
            </thead>
          </table>
          <Button variant="primary" onClick={handleDelete}>
            Delete Product
          </Button>
          {isDeleted && <div>{deleteText}</div>}
        </div>
      )}
    </>
  );
}

export default EditProducts;
