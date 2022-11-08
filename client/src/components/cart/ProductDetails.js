function ProductDetails() {
  const products = JSON.parse(localStorage.getItem("cartProds") || "[]");

  function calculateTotalPrice() {
    let totalPrice = 0;
    products.map((product) => {
      totalPrice += parseInt(product.productPrice);
    });
    return totalPrice;
  }
  return (
    <div>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <div>{product.productName}</div>
            <div>{product.productPrice}</div>
          </div>
        );
      })}
      <div>
        <strong>Total Price is: {calculateTotalPrice()}</strong>
      </div>
      <button type="submit" className="btn btn-primary mt-4">
        Checkout
      </button>
    </div>
  );
}

export default ProductDetails;
