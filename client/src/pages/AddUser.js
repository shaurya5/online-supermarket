import { useState } from "react";
import axios from 'axios';
import styles from "../styles/loginCard.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddUser() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [nameError, setNameError] = useState("");
  const [confPass, setConfPass] = useState("");
  const [confPassError, setConfPassError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;
    if (firstName === "" || lastName === "") {
      setNameError("");
      formIsValid = false;
      return false;
    } else {
      setNameError("");
      formIsValid = true;
    }

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

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

    if (password !== confPass) {
      formIsValid = false;
      setConfPassError("");
      return false;
    } else {
      setConfPassError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    handleValidation();
    await axios.post('http://localhost:8080/registerNewUser', {
      userName: username,
      userFirstName: firstName,
      userLastName: lastName,
      userPassword: password 
    })
    .then(res => console.log(res))
    toast("User Added!");
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 border border-secondary p-3 rounded">
          <form id="loginform">
            <h4 className="text-center">Add User</h4>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                id="NameInput"
                name="NameInput"
                aria-describedby="nameHelp"
                placeholder="Enter name"
                onChange={(event) => setFirstName(event.target.value)}
              />
              <small id="nameHelp" className="text-danger form-text">
                {nameError}
              </small>
            </div>
            <div className="form-group mt-2">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                id="NameInput"
                name="NameInput"
                aria-describedby="nameHelp"
                placeholder="Enter name"
                onChange={(event) => setLastName(event.target.value)}
              />
              <small id="nameHelp" className="text-danger form-text">
                {nameError}
              </small>
            </div>
            <div className="form-group mt-2">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </div>
            <div className="form-group mt-2">
              <label>Username</label>
              <input
                type="email"
                className="form-control"
                id="EmailInput"
                name="EmailInput"
                aria-describedby="emailHelp"
                placeholder="Enter username"
                onChange={(event) => setUsername(event.target.value)}
              />
              <small id="emailHelp" className="text-danger form-text">
                {emailError}
              </small>
            </div>
            <div className="form-group mt-2">
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
            <button type="submit" className="btn btn-primary mt-4" onClick={handleClick}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;
