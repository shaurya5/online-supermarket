import { useState, useEffect } from "react";
import ProductCard from "../components/dashboard/ProductCard";
import DashboardNav from "../components/navs/DashboardNav";
import { Container, CardGroup } from "react-bootstrap";
import styles from "../styles/dashboard.module.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [searchText, setSearchText] = useState("")
  const [products, setProducts] = useState([])
  const navigate = useNavigate();

  const filteredProducts = products.filter(product => {
    return product.productName.toLowerCase().includes(searchText.toLowerCase())  
  })
  
  useEffect(() => {
    if(!localStorage.getItem('role') || !localStorage.getItem('token')) {
      navigate('/auth-error')
    }
  }, [])

  useEffect(() => {
    (async () => {
      const allProducts = await axios.get('http://localhost:8080/getAllProducts')
      setProducts(allProducts.data)
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
            onChange={e => setSearchText(e.target.value)}
          />
        </Form>
        <CardGroup className={styles.cardGroup}>
          {filteredProducts.map((product, index) => {
            return (
              <div key={index} className="m-3">
                <ProductCard
                  productName={product.productName}
                  productPrice={product.productActualPrice}
                  productPhoto={product.productImage}
                />
              </div>
            );
          })}
        </CardGroup>
      </Container>
    </>
  );
}

export default Dashboard;
