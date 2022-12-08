import { useState } from "react";
import axios from 'axios';
import styles from "../styles/loginCard.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterCard() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [nameError, setNameError] = useState("");
  const [confPass, setConfPass] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;
    if (firstName === "" || lastName === "") {
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


    return formIsValid;
  };

  const handleClick = async (e) => {
    e.preventDefault();
    handleValidation();
    try {
      await axios.delete(`http://localhost:8080/deleteUserDetails/${username}`)
      toast("Manager Deleted!");
    }
    catch(err) {
       toast("Error!");
      console.log(err)
    }
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 border border-secondary p-3 rounded">
          <form id="loginform">
            <h4 className="text-center">Delete Manager</h4>
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
            <button type="submit" className="btn btn-primary mt-4" onClick={handleClick}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterCard;
