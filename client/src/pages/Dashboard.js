import React from 'react';
import ProductCard from '../components/dashboard/ProductCard';
import DashboardNav from '../components/navs/DashboardNav';

function Dashboard() {
  return (
    <>
      <DashboardNav />
      <div>
        <ProductCard productName="T-Shirt" productPrice="120" />
      </div>
    </>
  );
}

export default Dashboard;