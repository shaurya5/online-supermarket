import React, { useState } from "react";
import styles from "../../styles/loginCard.module.css";
import NavigationBar from "../navs/NavigationBar";

function ForgotPwd() {
  const [email, setEmail] = useState("");

  return (
    <>
      <NavigationBar />
      <div className={styles.container}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 border border-secondary p-3 rounded">
            <h4 className="text-center">Forgot Password</h4>
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

            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPwd;
