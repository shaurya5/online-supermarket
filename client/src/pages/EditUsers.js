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
        <AddUser />
        <DeleteUser />
      </div>
    </div>
  );
}

export default EditUsers;