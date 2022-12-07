import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import cart from "../../assets/cart.jpg";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductCard({
  productPhoto = cart,
  productName,
  productActualPrice,
  productDiscountedPrice,
  productId,
}) {

  function handleClick(e) {
    e.preventDefault();
    let cardProducts = JSON.parse(localStorage.getItem("cartProds") || "[]");
    const productId = e.target.firstElementChild.innerText;
    const productDetails = {
      productName,
      productDiscountedPrice,
      productId,
      productActualPrice,
    };

    cardProducts.push(productDetails);
    console.log(e);
    e.target.firstChild.textContent =
      e.target.firstChild.textContent === "Add to cart "
        ? "Remove from cart "
        : "Add to cart ";
    if (e.target.firstChild.textContent === "Add to cart ") {
      cardProducts = cardProducts.filter((product) => {
        return product.productId !== productId;
      });
    }

    localStorage.setItem("cartProds", JSON.stringify(cardProducts));
  }

  return (
    <Card style={{ width: "15rem" }} className="shadow">
      <Card.Img variant="top" src={productPhoto} width={300} height={200} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        {productDiscountedPrice ? (
          <>
            <Card.Text>
              Price:{" "}
              <s>{productActualPrice}</s> {productDiscountedPrice}
            </Card.Text>
          </>
        ) : (
          <Card.Text>Price: {productActualPrice}</Card.Text>
        )}
        <Button onClick={handleClick}>
          Add to cart <div className="d-none">{productId}</div>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
