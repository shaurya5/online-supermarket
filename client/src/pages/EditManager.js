import React from 'react';
import AdminNav from '../components/navs/AdminNav';
import AddManager from './AddManager'
import DeleteManager from './DeleteManager'

function EditManager(props) {
  return (
    <div>
      <AdminNav />
      <div className='d-flex flex-row'>
      <div className='my-5 ml-5 ' style={{width:"50vw",height:"50vh"}}>
        <AddManager />
        </div>
        <div className='my-5 mr-5' style={{width:"50vw",height:"50vh"}}>
        <DeleteManager />
      </div>
    </div>
    </div>
  );
}

export default EditManager;