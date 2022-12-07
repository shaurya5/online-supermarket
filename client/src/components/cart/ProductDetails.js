import { Button } from "react-bootstrap";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const products = JSON.parse(localStorage.getItem("cartProds") || "[]");
  const tableRef = useRef(null)
  const [finalProducts, setFinalProducts] = useState([])
  const navigate = useNavigate()

  async function handleClick(e) {
    e.preventDefault();
    setFinalProducts([])
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
    localStorage.setItem('finalProds', JSON.stringify(finalProducts))
    navigate('/checkout')
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
                  <input type="number" defaultValue="1" id="quantityInput" min={1}/>
                  <div className="d-none">{product.productId}</div>
                </td>
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
