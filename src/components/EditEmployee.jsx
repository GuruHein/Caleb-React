import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Input from './common/Input';

function EditEmployee({id, name, role, updateEmployee}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [employee, setEmployee] = useState(
    {
        id,
        name,
        role
    }
  )

  function handleChange({currentTarget: input}) {
    const {name, value} = input
    setEmployee({...employee, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    updateEmployee(employee)
  }

  return (
    <>
      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2" onClick={handleShow}>Update</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id="update-form" className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
                <Input 
                  name="name"
                  type="text"
                  value={employee.name}
                  placeholder={"Name"}
                  handleChange={handleChange}
                />
                <Input 
                  name="role"
                  type="text"
                  value={employee.role}
                  placeholder={"Role"}
                  handleChange={handleChange}
                />
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
          <button  form="update-form" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;