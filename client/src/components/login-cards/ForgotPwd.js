import React, { useState } from "react";
import styles from "../../styles/loginCard.module.css";
import NavigationBar from "../navs/NavigationBar";
import emailjs from "emailjs-com";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPwd() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("")

  function generateRandomPassword(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  async function handleClick(e) {
    e.preventDefault();
    const new_password = generateRandomPassword(10);
    emailjs.send(
      "service_zo6gucq",
      "template_og6jr4o",
      {
        new_password,
        user_email: email
      },
      "ITZ1kNWi5iduyLDxv"
    );

    const request = await axios.put('http://localhost:8080/editUserPassword', {
      userName: username,
      userPassword: new_password
    })
    toast("Password Changed. Check Email!");
  }

  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="row d-flex justify-content-center my-5">
          <div className="col-md-4 border border-secondary p-3 rounded my-5 shadow-lg">
            <h4 className="text-center">Forgot Password</h4>
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="EmailInput"
              name="user_email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label>User Name</label>
            <input
              type="text"
              className="form-control"
              id="EmailInput"
              name="user_email"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <button onClick={handleClick} className="btn btn-primary mt-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPwd;
