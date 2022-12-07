import { useState } from "react";
import styles from "../../styles/loginCard.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


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
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
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
      // console.log(response);
      if(response.data.user.role[0].name === "user") {
        localStorage.setItem('role', 'user');
        localStorage.setItem('token', response.data.jwtToken)
        localStorage.setItem('username', response.data.user.userName)
        navigate('/dashboard')
      }
      else {
        console.log("Authentication error!")
      }
    } catch (err) {
      console.log(err);
    }
  };
  // style={{backgroundImage: require(ecombg)}}

  return (
    <div className="container" style={{backgroundImage: "linear-gradient(to right top, #637898, #009bc3, #00bfbf, #00db86, #a8eb12)",width:"100vw",height:"92vh",padding:"0"}}> 
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-4 border border-secondary p-3 rounded shadow-lg bg-light my-5">
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
