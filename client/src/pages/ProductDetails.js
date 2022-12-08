import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminNav from "../components/navs/AdminNav";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductDetails() {
  const [productDetails, setProductDetails] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://localhost:8080/getAllProducts");
      setProductDetails(response.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://localhost:8080/getProductDetailsById/${productId}`
      );
      setCurrentProduct(response.data);
    })();
  }, [productId]);

  async function handleEdit(event) {
    event.preventDefault();
    const productName = event.target[0].value;
    const productDescription = event.target[1].value;
    const productActualPrice = event.target[2].value;
    const productDiscountedPrice = event.target[3].value;

    const request = await axios.put(
      "http://localhost:8080/editProductDetails",
      {
        productID: productId,
        productName,
        productDescription,
        productActualPrice,
        productDiscountedPrice,
      }
    );
    toast("Product Succesfully Edited");
    setShowModal(false);
  }

  async function handleDelete(e) {
    try {
      const productID = e.target.parentElement.parentElement.cells[0].innerHTML;
      const request = await axios.delete(
        `http://localhost:8080/deleteProductDetails/${productID}`
      );
      toast("Product Succesfully Deleted");
    } catch (err) {
      console.log(err);
    }
  }

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = (e) => {
    setShowModal(true);
    const productID = e.target.parentElement.parentElement.cells[0].innerHTML;
    setProductId(productID);
  };

  return (
    <>
      <AdminNav />
      <div className="mt-5 d-flex justify-content-center align-items-center">
        <table className="w-75 table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Actual Price</th>
              <th>Product Discounted Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {productDetails.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{product.productID}</td>
                  <td>{product.productName}</td>
                  <td>{product.productDescription}</td>
                  <td>{product.productActualPrice}</td>
                  <td>{product.productDiscountedPrice}</td>
                  {/* <td><img src={product.productImage} width={300} height={300} /></td> */}
                  <td>
                    <Button variant="primary" onClick={handleShow}>
                      Edit
                    </Button>{" "}
                    <Button variant="danger" onClick={handleDelete}>
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {Object.keys(currentProduct).length !== 0 && (
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Form
                className="w-100 mt-4 d-flex flex-column justify-content-center align-items-center"
                onSubmit={handleEdit}
              >
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                  <h3>Edit Product Details</h3>
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                  <Form.Label>Product Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    defaultValue={currentProduct.productName}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                  <Form.Label>Product Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder=""
                    defaultValue={currentProduct.productDescription}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                  <Form.Label>Product Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    defaultValue={currentProduct.productActualPrice}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                  <Form.Label>Discounted Price (if any)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    defaultValue={currentProduct.productDiscountedPrice}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Modal.Header>
          </Modal>
        )}
        <ToastContainer/>
      </div>
    </>
  );
}

export default ProductDetails;
