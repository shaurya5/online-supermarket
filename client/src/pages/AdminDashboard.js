import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNav from '../components/navs/AdminNav';

function AdminDashboard() {
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!localStorage.getItem("role") || !localStorage.getItem("token")) {
      navigate("/auth-error");
    }
  }, []);

  return (
    <>
      <AdminNav />
    </>
  );
}

export default AdminDashboard;