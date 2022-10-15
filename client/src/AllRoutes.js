import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin-login' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;