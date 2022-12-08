import axios from "axios";
import { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProfileCard() {
  const [userDetails, setUserDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showPwdModal, setShowPwdModal] = useState(false);
  const navigate = useNavigate()
  
  useEffect(() => {
    (async () => {
      const username = localStorage.getItem("username");
      try {
        const response = await axios.get(
          `http://localhost:8080/getUserById/${username}`
        );
        setUserDetails(response.data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  function ModalComponent() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    async function handleEditClick() {
      try {
        const request = await axios.put('http://localhost:8080/editUserDetails', {
          userName: localStorage.getItem('username'),
          userFirstName: firstName,
          userLastName: lastName
        })
        toast("User details updated");
      }
      catch(err) {
        console.log(err)
      }
    }

    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Form className="w-100 mt-4 d-flex flex-column justify-content-center align-items-center">
            <Form.Group className="mb-3 w-50">
              <h3>Edit Details</h3>
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" defaultValue={userDetails.userName} disabled />
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={userDetails.userFirstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 w-50">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={userDetails.userLastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Button onClick={handleEditClick}>Submit</Button>
          </Form>
        </Modal.Header>
      </Modal>
    );
  }

  function PasswordModal() {
    const [password, setPassword] = useState("")

    async function handlePwdChange() {
      try {
        const request = await axios.put('http://localhost:8080/editUserPassword', {
          userName: localStorage.getItem('username'),
          userPassword: password
        })
        toast("Password changed succesfully");
      }
      catch(err) {
        console.log(err)
      }
    } 

    return (
      <Modal show={showPwdModal} onHide={handlePwdClose}>
        <Modal.Header closeButton>
          <Form className="w-100 mt-4 d-flex flex-column justify-content-center align-items-center">
            <Form.Group>
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control type="password" />
              <br/>
            </Form.Group>
            <Button onClick={handlePwdChange}>Submit</Button>
          </Form>
        </Modal.Header>
      </Modal>
    );
  }

  function TopupWallet() {
    const [wallet, setWallet] = useState("")
    const currentWallet = userDetails.wallet

    async function handleClick(e) {
      e.preventDefault()
      try {
        if(wallet <= 0) {
          toast("Enter a positive value to add");
          return
        }
        const request = await axios.put('http://localhost:8080/topupWallet', {
          userName: localStorage.getItem('username'),
          wallet: parseInt(wallet) + parseInt(currentWallet)
        })
        toast("Money added to wallet");
      }
      catch(err) {
        console.log(err)
      }
    }

    return (
      <div className="w-75">
        <Form className="shadow-lg rounded w-25 mt-5 mx-5 p-2 d-flex flex-column flex-start justify-content-center align-items-center border bg-gray mx-5">
          <Form.Group>
            <h3>Top Up Wallet</h3>
            <h4>Current balance: {userDetails.wallet}</h4>
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter amount to add to wallet</Form.Label>
            <br/>
            <Form.Control
              type="text"
              value={wallet}
              onChange={(e) => {setWallet(e.target.value)}}
            />
          </Form.Group>
          
          <Button className="mt-1" onClick={handleClick}>Add</Button>
        </Form>
      </div>
    )
  }

  function handleClick() {
    setShowModal(true);
  }

  function handlePwdClick() {
    setShowPwdModal(true);
  }

  function handleClose() {
    setShowModal(false);
  }

  function handlePwdClose() {
    setShowPwdModal(false);
  }

  async function handleDelete() {
    const username = localStorage.getItem('username')
    try {
      await axios.delete(`http://localhost:8080/deleteUserDetails/${username}`)
      toast("User deleted");
      navigate('/login')
      localStorage.clear()
    }
    catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="p-4 mb-10 d-flex flex-row"  >
      {Object.keys(userDetails).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <Form className="shadow-lg rounded p-4 w-25 mt-10 d-flex flex-column flex-start justify-content-center align-items-center border bg-gray mx-5 ">
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={userDetails.userName}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={userDetails.userFirstName}
              disabled
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={userDetails.userLastName}
              disabled
            />
          </Form.Group>
          <div className="d-flex flex-column">
            <Button onClick={handleClick}>Edit details</Button>
            <Button className="mt-3" onClick={handlePwdClick}>Change Password</Button>
            <Button className="mt-3" variant="danger" onClick={handleDelete}>Delete Account</Button>
          </div>
        </Form>
      )}
      <TopupWallet />
      <ModalComponent />
      <PasswordModal />
    </div>
  );
}

export default ProfileCard;
