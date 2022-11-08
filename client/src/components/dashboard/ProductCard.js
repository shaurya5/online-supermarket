import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import cart from '../../assets/cart.jpg'
import Button from 'react-bootstrap/Button'

function ProductCard({ productPhoto=cart, productName, productPrice }) {

  function handleClick() {
    let cardProducts = JSON.parse(localStorage.getItem("cartProds") || "[]");
    const productDetails = {
      productName,
      productPrice
    }
    cardProducts.push(productDetails)
    localStorage.setItem('cartProds', JSON.stringify(cardProducts))
  }

  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={productPhoto} />
      <Card.Body>
        <Card.Title>{productName}</Card.Title>
        <Card.Text>
          Price: {productPrice}
        </Card.Text>
        <Button onClick={handleClick}>Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;