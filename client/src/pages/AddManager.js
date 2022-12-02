import { useState } from "react";
import axios from "axios";
import ManagerLoginCard from "../components/login-cards/ManagerLoginCard";
import NavigationBar from "../components/navs/NavigationBar";

function AddManager() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  async function handleClick() {
    try {
      const request = await axios.post(
        "http://localhost:8080/registerNewUser",
        {
          userName: username,
          userFirstName: name,
          userLastName: name,
          userPassword: password,
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <NavigationBar />
      <ManagerLoginCard />
    </>
  );
}

export default AddManager;
