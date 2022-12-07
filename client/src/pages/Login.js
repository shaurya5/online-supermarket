import React from 'react';
import LoginCard from '../components/login-cards/LoginCard';
import NavigationBar from '../components/navs/NavigationBar';

function Login() {
  return (
    <div style={{width:"100vw",margin:"0",padding:"0"}}>
      <NavigationBar />

      <LoginCard />
    </div>
  );
}

export default Login;