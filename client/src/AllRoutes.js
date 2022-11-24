import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import ForgotPwd from './components/login-cards/ForgotPwd';
import Profile from './pages/Profile';
import Cart from './pages/Cart'
import AuthenticationError from './pages/AuthenticationError';
import InvalidRoute from './pages/InvalidRoute';
import AddProducts from './pages/AddProducts';

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/forgot-pwd' element={<ForgotPwd />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/add-products' element={<AddProducts />} />
        <Route path='/auth-error' element={<AuthenticationError />} />
        <Route path='/*' element={<InvalidRoute />} />

      </Routes>
    </Router>
  );
}

export default AllRoutes;