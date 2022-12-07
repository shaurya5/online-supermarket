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

  // const [added, setAdded] = useState(false)

  // useEffect(() => {
  //   const productDetails = {
  //     productName,
  //     productDiscountedPrice,
  //     productId,
  //     productActualPrice
  //   };
  //   let cartProducts = JSON.parse(localStorage.getItem("cartProds") || "[]");
  //   if(cartProducts.contains(productDetails)) {
  //     setAdded(true)
  //   }
  // }, [])

  function handleClick(e) {
    e.preventDefault();
    let cardProducts = JSON.parse(localStorage.getItem("cartProds") || "[]");
    const productId = e.target.firstElementChild.innerText;
    const productDetails = {
      productName,
      productDiscountedPrice,
      productId,
      productActualPrice
    };

    cardProducts.push(productDetails);
    console.log(e)
    e.target.firstChild.textContent = (e.target.firstChild.textContent === "Add to cart ") ? "Remove from cart " : "Add to cart "
    if(e.target.firstChild.textContent === 'Add to cart ') {
      cardProducts = cardProducts.filter((product) => {
        return product.productId !== productId
      })
    }

    // e.target.firstChild.textContent = added ? "Remove from cart " : "Add to cart "
    localStorage.setItem("cartProds", JSON.stringify(cardProducts));
  }

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={productPhoto} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>Price: <s>{productActualPrice}</s> {productDiscountedPrice}</Card.Text>
        <Button onClick={handleClick}>
          Add to cart <div className="d-none">{productId}</div>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
