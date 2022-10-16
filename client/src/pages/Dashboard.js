import { useState } from "react";
import ProductCard from "../components/dashboard/ProductCard";
import DashboardNav from "../components/navs/DashboardNav";
import { Container, CardGroup } from "react-bootstrap";
import styles from "../styles/dashboard.module.css";
import Form from "react-bootstrap/Form";

function Dashboard() {
  const [searchText, setSearchText] = useState("")

  const products = [
    {
      productName: "T-Shirt",
      productPrice: "120",
    },
    {
      productName: "T-Shirt",
      productPrice: "200",
    },
    {
      productName: "T-Shirt",
      productPrice: "120",
    },
    {
      productName: "T-Shirt",
      productPrice: "200",
    },
    {
      productName: "Pringles",
      productPrice: "120",
    },
    {
      productName: "Doritos",
      productPrice: "200",
    },
    {
      productName: "Trousers",
      productPrice: "120",
    },
    {
      productName: "Jeans",
      productPrice: "200",
    },
  ];

  const filteredProducts = products.filter(product => {
    return product.productName.toLowerCase().includes(searchText.toLowerCase())  
  })

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
                  productPrice={product.productPrice}
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
