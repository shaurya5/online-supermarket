import React from 'react';
import ManagerLoginCard from '../components/login-cards/ManagerLoginCard';
import NavigationBar from '../components/navs/NavigationBar';

function AdminLogin() {
  return (
    <>
      <NavigationBar />
      <AdminLoginCard />
    </>
  );
}

export default AdminLogin;