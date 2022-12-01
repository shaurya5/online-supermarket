import { useState } from "react";
import styles from "../../styles/loginCard.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ManagerLoginCard() {
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
        "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
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
        navigate('/dashboard')
      }
      else {
        console.log("Authentication error!")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 border border-secondary p-3 rounded">
          <form id="loginform" onSubmit={loginSubmit}>
            <div className="form-group">
              <h4 className="text-center">Manager Login</h4>
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

export default ManagerLoginCard;
