import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductDetails from '../components/cart/ProductDetails';
import DashboardNav from '../components/navs/DashboardNav';

function Cart() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem("role") || !localStorage.getItem("token")) {
      navigate("/auth-error");
    }
  }, []);

  return (
    <>
      <DashboardNav searchShown={false} />
      <ProductDetails />
    </>
  );
}

export default Cart;