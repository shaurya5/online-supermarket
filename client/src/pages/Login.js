import React from 'react';
import LoginCard from '../components/login-cards/LoginCard';
import NavigationBar from '../components/navs/NavigationBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
    <div style={{width:"100vw",margin:"0",padding:"0"}}>
      <NavigationBar />

      <LoginCard />
    </div>
    <div>
    <button onClick={notify}>Notify!</button>
    <ToastContainer />
  </div>
  </div>
    
  );
}

export default Login;