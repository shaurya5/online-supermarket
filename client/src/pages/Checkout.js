import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DashboardNav from "../components/navs/DashboardNav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function OrderSummary() {
  const finalProducts = JSON.parse(localStorage.getItem("finalProds"));
  const products = JSON.parse(localStorage.getItem("cartProds"));
  const [newProductList, setNewProductList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);  

  useEffect(() => {
    const temp = [];
    let totalPriceHere = 0;

    finalProducts.map((finalProduct) => {
      const productId = finalProduct.productId;
      let newProduct = {};
      for (var i = 0; i < products.length; i++) {
        if (products[i].productId === productId) {
          newProduct = products[i];
          break;
        }
      }
      // console.log(finalProd)
      newProduct.quantity = finalProduct.quantity;
      newProduct.totalPrice =
        parseInt(newProduct.quantity) *
        parseInt(
          newProduct.productDiscountedPrice
            ? newProduct.productDiscountedPrice
            : newProduct.productActualPrice
        );

      totalPriceHere += newProduct.totalPrice;
      // console.log(finalProduct)
      temp.push(newProduct);
    });
    setTotalPrice(totalPriceHere);
    setNewProductList(temp);
    console.log(temp);
  }, []);

  return (
    <>
      <div
        className="row g-3 mt-5 pl-2 mx-5 border border-2 shadow p-2 rounded"
        style={{ width: "60vw" }}
      >
        <h3 className="mx-5 px-5">Order Summary</h3>
        <table
          className="mx-5 table table-striped table-hover table-bordered"
          style={{ width: "40vw" }}
        >
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Product Name</th>
              <th width="25%">Product Price</th>
              <th width="5%">Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {newProductList.map((product, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>
                    {product.productDiscountedPrice
                      ? product.productDiscountedPrice
                      : product.productActualPrice}
                  </td>
                  <td>{product.quantity}</td>
                  <td>{product.totalPrice}</td>
                </tr>
              );
            })}
            <h4 className="text-right">Total Price: {totalPrice}</h4>
          </tbody>
        </table>
      </div>
    </>
  );
}

function UserForm() {
  const [fullName, setFullName] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [alternatePhone, setAlternatePhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const navigate = useNavigate()

  async function handleClick(e) {
    e.preventDefault();
    console.log(e.target.value);
    const data = JSON.parse(localStorage.getItem("finalProds"));
    console.log(data);
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Access-Control-Allow-Origin': 'http://localhost:3000'
        },
      };
      localStorage.setItem('zipcode', parseInt(zipcode))
      const request = await axios.post(
        "http://localhost:8080/placeOrder",
        {
          fullName,
          fullAddress,
          contactNumber: phone,
          alternateContactNumber: alternatePhone,
          zipcode: parseInt(zipcode),
          orderProductQuantityList: data,
        },
        config
      );
      console.log(request);
      localStorage.removeItem('cartProds')
      localStorage.removeItem('finalProds')
      navigate('/order-placed')
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="pl-2 mx-5" style={{ width: "40vw" }}>
      <form
        className="row g-4 mt-5 border border-2 shadow p-3 rounded "
        style={{ width: "35vw" }}
      >
        <h3>Enter your details</h3>
        <div className="col-md-12">
          <label htmlFor="inputName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Full Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            onChange={(e) => setFullAddress(e.target.value)}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputZipcode" className="form-label">
            Zipcode
          </label>
          <input
            type="text"
            className="form-control"
            id="inputZipcode"
            onChange={(e) => setZipcode(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">
            Phone Number
          </label>
          <input
            type="phone"
            className="form-control"
            id="inputPhone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">
            Alternate Phone Number
          </label>
          <input
            type="phone"
            className="form-control"
            id="inputPhone"
            onChange={(e) => setAlternatePhone(e.target.value)}
          />
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleClick}
          >
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
function Checkout() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("role") || !localStorage.getItem("token")) {
      navigate("/auth-error");
    }
  }, []);

  return (
    <div className="w-screen justify-content-center">
      <DashboardNav />
      <div className="d-flex flex-row">
        <UserForm />
        <OrderSummary />
      </div>
    </div>
  );
}

export default Checkout;
