import React from 'react';
import { ToastContainer } from 'react-toastify';
import LoginCard from '../components/login-cards/LoginCard';
import NavigationBar from '../components/navs/NavigationBar';


function Login() {
 
  return (
    <div>
    <div style={{width:"100vw",margin:"0",padding:"0"}}>
      <NavigationBar />

      <LoginCard />
    </div>
    <ToastContainer/>
  </div>
    
  );
}

export default Login;