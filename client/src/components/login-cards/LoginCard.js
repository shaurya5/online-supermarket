import { useState } from "react";
import styles from "../../styles/loginCard.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginCard() {
  const [userPassword, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userPasswordError, setUserPasswordError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  

  const navigate = useNavigate();

  let config = {
    headers: {
      "No-Auth": "True",
    },
  };

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!userPassword.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setUserPasswordError(
        ""
      );
      return false;
    } else {
      setUserPasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    handleValidation();

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/authenticate",
        // headers: {
        //   "No-Auth": "True",
        // },
        data: {
          username: userName,
          password: userPassword,
        },
      });
      console.log(response);
      // if(response.data.user.role[0].name === "user") {
        localStorage.setItem('role', 'user');
        localStorage.setItem('token', response.data.jwtToken)
        localStorage.setItem('username', response.data.user.userName)
        navigate('/dashboard')
      // }
      // else {
      //   toast("Username or Password Incorrect!");
      //   console.log("Authentication error!")
        
      // }
    } catch (err) {
      toast("Error!");
      console.log(err);
    }
  };
  // style={{backgroundImage: require(ecombg)}}

  return (
    <div className="container" > 
      <div className="row mt-5 d-flex justify-content-center align-items-center" style={{width:"100%",margin:"0",padding:"0"}}>
        <div className="col-md-4 mt-5 border border-secondary p-3 rounded shadow-lg bg-light my-5">
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group">
              <h4 className="text-center">User Login</h4>
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="userNameInput"
                name="userNameInput"
                aria-describedby="userNameHelp"
                placeholder="Enter username"
                onChange={(event) => setUserName(event.target.value)}
              />
              <small id="usernameHelp" className="text-danger form-text">
                {userNameError}
              </small>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="userPassworderror" className="text-danger form-text">
                {userPasswordError}
              </small>
            </div>
            <div className="mt-2">
              <a href="/forgot-pwd">Forgot Password</a>
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
