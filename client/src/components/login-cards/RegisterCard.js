import { useState } from "react";
import styles from "../../styles/loginCard.module.css";

function RegisterCard() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [confPass, setConfPass] = useState("");
  const [confPassError, setConfPassError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;
    if (name === "") {
      setNameError("Name cannot be empty");
      formIsValid = false;
      return false;
    } else {
      setNameError("");
      formIsValid = true;
    }

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

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

    if (password !== confPass) {
      formIsValid = false;
      setConfPassError("Password and Confirm Password have to be same");
      return false;
    } else {
      setConfPassError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <div className={styles.container}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 border border-secondary p-3 rounded">
          <form id="loginform" onSubmit={loginSubmit}>
            <h4 className="text-center">Register</h4>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                id="NameInput"
                name="NameInput"
                aria-describedby="nameHelp"
                placeholder="Enter name"
                onChange={(event) => setName(event.target.value)}
              />
              <small id="nameHelp" className="text-danger form-text">
                {nameError}
              </small>
            </div>
            <div className="form-group">
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
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="confInputPassword"
                placeholder="Confirm Password"
                onChange={(event) => setConfPass(event.target.value)}
              />
              <small id="passworderror" className="text-danger form-text">
                {confPassError}
              </small>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterCard;
