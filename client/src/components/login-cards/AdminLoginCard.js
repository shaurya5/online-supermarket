import { useState } from "react";
import styles from "../../styles/loginCard.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminLoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const navigate = useNavigate()

  const handleValidation = (event) => {
    let formIsValid = true;


    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        ""
      );
      return false;
    } else {
      setpasswordError("");
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
          username,
          password
        },
      });
      console.log(response);
      if(response.data.user.role[0].name === "admin") {
        localStorage.setItem('role', 'admin');
        localStorage.setItem('token', response.data.jwtToken)
        navigate('/add-products')
      }
      else {
        toast("Username or Password Incorrect!");
        console.log("Authentication error!")
      }
    } catch (err) {
      toast("Username or Password Incorrect!");
      console.log(err);
    }
  };

  return (
    <div className="container" > 
    <div className="row mt-5 d-flex justify-content-center align-items-center" style={{width:"100%",margin:"0",padding:"0"}}>
      <div className="col-md-4 mt-5 border border-secondary p-3 rounded shadow-lg bg-light my-5">
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group">
              <h4 className="text-center">Admin Login</h4>
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="usernameInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setUsername(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {/* {emailError} */}
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
              <small id="passworderror" className="text-danger form-text">
                {passwordError}
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

export default AdminLoginCard;
