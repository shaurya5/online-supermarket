import { Button } from "react-bootstrap";
import { useState, useRef } from "react";

function ProductDetails() {
  const products = JSON.parse(localStorage.getItem("cartProds") || "[]");
  const tableRef = useRef(null)
  const [finalProducts, setFinalProducts] = useState([])

  function calculateTotalPrice() {
    let totalPrice = 0;
    products.map((product) => {
      totalPrice += parseInt(product.productPrice);
    });
    return totalPrice;
  }

  async function handleClick(e) {
    e.preventDefault();
    console.log(tableRef)
    let productId, quantity;

    (Array.from(tableRef.current.lastChild.children).map((row) => {
      Array.from(row.children[4].children).map((cell, index) => {
        if(index === 0) {
          quantity = cell.value
        }
        else if(index === 1) {
          productId = cell.outerText
        }
      })
      const product = {
        productId,
        quantity
      }
      finalProducts.push(product)
    }))
    console.log(finalProducts)
    localStorage.setItem('finalProds', finalProducts)
  }

  return (
    <>
      <h2></h2>
      <table className="w-75 table table-striped table-hover table-bordered" ref={tableRef}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Product Name</th>
            <th width="14%">Product Actual Price</th>
            <th width="17%">Product Discounted Price</th>
            <th width="5%">Quantity</th>
            {/* <th>Price</th> */}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productActualPrice}</td>
                <td>{product.productDiscountedPrice}</td>
                <td>
                  <input type="number" defaultValue="1" id="quantityInput" />
                  <div className="">{product.productId}</div>
                </td>
                {/* <td>{product.productDiscountedPrice}</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button onClick={handleClick}>Checkout</Button>
    </>
  );
}

export default ProductDetails;
