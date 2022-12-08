import React from 'react';
import { ToastContainer } from 'react-toastify';
import RegisterCard from '../components/login-cards/RegisterCard';
import NavigationBar from '../components/navs/NavigationBar';

function Register() {
  return (
    <>
      <NavigationBar />
      <RegisterCard />
      <ToastContainer/>
    </>
  );
}

export default Register;