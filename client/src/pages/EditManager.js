import React from 'react';
import AdminNav from '../components/navs/AdminNav';
import AddManager from './AddManager'
import DeleteManager from './DeleteManager'

function EditManager(props) {
  return (
    <div>
      <AdminNav />
      <div className='d-flex flex-row'>
        <AddManager />
        <DeleteManager />
      </div>
    </div>
  );
}

export default EditManager;