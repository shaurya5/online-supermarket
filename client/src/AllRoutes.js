import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ForgotPwd from "./components/login-cards/ForgotPwd";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import AuthenticationError from "./pages/AuthenticationError";
import InvalidRoute from "./pages/InvalidRoute";
import AddProducts from "./pages/AddProducts";
import AddManager from "./pages/AddManager";
import AdminDashboard from "./pages/AdminDashboard";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import OrderPlaced from "./pages/OrderPlaced";

function AllRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/manager-login" element={<AddManager />} />
        <Route path="/forgot-pwd" element={<ForgotPwd />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/auth-error" element={<AuthenticationError />} />
        <Route path="/add-products" element={<AddProducts />} />
        <Route path="/add-manager" element={<AddManager />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/edit-products" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-placed" element={<OrderPlaced />} />
        <Route path="/*" element={<InvalidRoute />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
