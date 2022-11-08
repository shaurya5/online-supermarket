import React from 'react';
import ProductDetails from '../components/cart/ProductDetails';
import DashboardNav from '../components/navs/DashboardNav';

function Cart() {
  return (
    <>
      <DashboardNav searchShown={false} />
      <ProductDetails />
    </>
  );
}

export default Cart;