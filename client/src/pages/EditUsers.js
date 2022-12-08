import React from 'react';
import RegisterCard from '../components/login-cards/RegisterCard';
import AdminNav from '../components/navs/AdminNav';
import AddUser from './AddUser';
import DeleteUser from './DeleteUser'

function EditUsers() {
  return (
    <div>
      <AdminNav />
      <div className='d-flex flex-row'>
      <div className='my-5 ml-5 ' style={{width:"50vw",height:"50vh"}}>
        <AddUser />
        </div>
        <div className='my-5 mr-5' style={{width:"50vw",height:"50vh"}}>
        <DeleteUser />
        </div>
      </div>
      
       
      
    </div>
  );
}

export default EditUsers;