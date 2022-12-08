import { useState, useEffect } from "react";
import ProductCard from "../components/dashboard/ProductCard";
import DashboardNav from "../components/navs/DashboardNav";
import { Container, CardGroup } from "react-bootstrap";
import styles from "../styles/dashboard.module.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [searchText, setSearchText] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const filteredProducts = products.filter((product) => {
    return product.productName.toLowerCase().includes(searchText.toLowerCase());
  });

  useEffect(() => {
    if (!localStorage.getItem("role") || !localStorage.getItem("token")) {
      navigate("/auth-error");
    }
  }, []);

  useEffect(() => {
    (async () => {
      const allProducts = await axios.get(
        "http://localhost:8080/getAllProducts"
      );
      setProducts(allProducts.data);
    })();
  }, []);

  return (
    <>
      <DashboardNav searchShown={true} />
      <Container className="p-4">
        <Form className="d-flex justify-content-end">
          <Form.Control
            type="search"
            placeholder="Search Products"
            className="me-5 w-auto"
            aria-label="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Form>
        <CardGroup className={styles.cardGroup}>
          {filteredProducts.length === 0 ? (
            <h3>No Products to Display!</h3>
          ) : (
            filteredProducts.map((product, index) => {
              return (
                <div key={index} className="m-3">
                  <ProductCard
                    productName={product.productName}
                    productActualPrice={product.productActualPrice}
                    productDiscountedPrice={product.productDiscountedPrice}
                    productPhoto={product.productImage}
                    productId={product.productID}
                  />
                </div>
              );
            })
          )}
        </CardGroup>
      </Container>
    </>
  );
}

export default Dashboard;
