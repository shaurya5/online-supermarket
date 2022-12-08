import { Button } from "react-bootstrap";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetails() {
  // const products = JSON.parse(localStorage.getItem("cartProds") || "[]");
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cartProds") || "[]"))
  const tableRef = useRef(null);
  const [finalProducts, setFinalProducts] = useState([]);
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    setFinalProducts([]);
    console.log(tableRef);
    let productId, quantity;

    Array.from(tableRef.current.lastChild.children).map((row) => {
      Array.from(row.children[4].children).map((cell, index) => {
        if (index === 0) {
          quantity = cell.value;
        } else if (index === 1) {
          productId = cell.outerText;
        }
      });
      const product = {
        productId,
        quantity,
      };
      finalProducts.push(product);
    });

    console.log(finalProducts);
    localStorage.setItem("finalProds", JSON.stringify(finalProducts));
    navigate("/checkout");
  }

  function handleDelete(index) {
    console.log(index)
    let products = JSON.parse(localStorage.getItem('cartProds'))
    products = products.filter((product) => {
      return product.productId !== index
    })
    localStorage.setItem('cartProds', JSON.stringify(products))
    setProducts(products)
  }

  return (
    <div className="text-center d-flex flex-column justify-content-center align-items-center">
      <h2 className="mt-4 mb-3">Your Cart</h2>
      <table
        className="w-75 table table-striped table-hover table-bordered"
        ref={tableRef}
      >
        <thead>
          <tr>
            <th width="5%">S.No.</th>
            <th width="">Product Name</th>
            <th width="14%">Product Actual Price</th>
            <th width="17%">Product Discounted Price</th>
            <th width="5%">Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{product.productName}</td>
                <td>{product.productActualPrice}</td>
                <td>{product.productDiscountedPrice}</td>
                <td>
                  <input
                    type="number"
                    defaultValue="1"
                    id="quantityInput"
                    min={1}
                  />
                  <div className="d-none">{product.productId}</div>
                </td>
                <td width="5%">
                  <button
                    className="border border-0 bg-transparent shadow-none"
                    onClick={() => handleDelete(product.productId)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button className="w-25" onClick={handleClick}>
        Checkout
      </Button>
    </div>
  );
}

export default ProductDetails;
