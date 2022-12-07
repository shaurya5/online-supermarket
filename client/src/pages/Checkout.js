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
      newProduct.totalPrice = parseInt(finalProduct.quantity) * parseInt(finalProduct.productDiscountedPrice) 
      temp.push(newProduct)
    })

    setNewProductList(temp)
  }, [])

  return (
    <div>
      <h4>Order Summary</h4>
      <table className="w-75 table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Product Name</th>
            <th width="14%">Product Price</th>
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
                <td>{product.productDiscounted}</td>
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
    <div>
      <form className="row g-3 w-50 border border-2">
        <h4>Enter your details</h4>
        <div className="col-md-6">
          <label for="inputName" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" id="inputName" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Full Address
          </label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="col-md-6">
          <label for="inputPhone" className="form-label">
            Phone Number
          </label>
          <input type="phone" className="form-control" id="inputPhone" />
        </div>
        <div className="col-md-6">
          <label for="inputPhone" className="form-label">
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
      <OrderSummary />
      <UserForm />
    </div>
  );
}

export default Checkout;
