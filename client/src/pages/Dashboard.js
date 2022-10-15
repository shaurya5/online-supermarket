import React from "react";
import ProductCard from "../components/dashboard/ProductCard";
import DashboardNav from "../components/navs/DashboardNav";
import { Container, CardGroup } from "react-bootstrap";
import styles from '../styles/dashboard.module.css'

function Dashboard() {
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
  ];

  return (
    <>
      <DashboardNav />
      <Container className="p-4">
        <CardGroup className={styles.cardGroup}>
          {products.map((product, index) => {
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
