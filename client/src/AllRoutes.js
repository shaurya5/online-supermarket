import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import AdminLogin from './components/AdminLogin';
import Register from './pages/register';
import Login from './pages/login';
import App from './App';

function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin-login' element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AllRoutes;