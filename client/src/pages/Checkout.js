import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function OrderSummary() {
  const finalProducts = JSON.parse(localStorage.getItem('finalProds'))
  const products = JSON.parse(localStorage.getItem('cartProds'))
  const [newProductList, setNewProductList] = useState([])

  useEffect(() => {
    const temp = []
    finalProducts.map((finalProduct) => {
      const productId = finalProduct.productId
      let newProduct = {}
      for(var i = 0; i < products.length; i++) {
        if(products[i].productId === productId) {
          newProduct = products[i]
          break;
        }
      }
      // console.log(finalProd)
      newProduct.quantity = finalProduct.quantity
      newProduct.totalPrice = parseInt(newProduct.quantity) * parseInt(newProduct.productDiscountedPrice) 
      // console.log(finalProduct)
      temp.push(newProduct)
    })

    setNewProductList(temp)
    console.log(temp)
  }, [])

  return (
    <div className="row g-3 mt-5 pl-2 mx-4 border border-2 shadow p-2 rounded" style={{ width: "60vw" }}>
      <h3 className="mx-5 px-5">Order Summary</h3>
      <table className="mx-5 table table-striped table-hover table-bordered" style={{ width: "40vw" }}>
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
                <td>{product.productDiscountedPrice}</td>
                <td>{product.quantity}</td>
                <td>{product.totalPrice}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function UserForm() {
  return (
    <div className="pl-2 mx-5" style={{ width: "40vw" }}>
      <form className="row g-5 mt-5 border border-2 shadow p-3 rounded " style={{ width: "35vw" }}>
        <h3>Enter your details</h3>
        <div className="col-md-6">
          <label htmlFor="inputName" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" id="inputName" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">
            Full Address
          </label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">
            Phone Number
          </label>
          <input type="phone" className="form-control" id="inputPhone" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPhone" className="form-label">
            Alternate Phone Number
          </label>
          <input type="phone" className="form-control" id="inputPhone" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
}
function Checkout() {
  return (
    <div className="d-flex flex-row w-screen justify-content-center"> 
      <UserForm />
      <OrderSummary />
    </div>
  );
}

export default Checkout;
