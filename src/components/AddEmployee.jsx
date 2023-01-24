import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Input from './common/Input';

function AddEmployee({addEmployee}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [employee, setEmployee] = useState(
    {
        name: "",
        role: "",
        img: ""
    }
  )

  function handleChange({currentTarget: input}) {
    const {name, value} = input
    setEmployee({...employee, [name]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    addEmployee(employee)
    setEmployee({
        name: "",
        role: "",
        img: ""
    })
  }

  return (
    <div>
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mx-auto block my-10" onClick={handleShow}>+ Add Guru</button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id="add-form" className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                <Input 
                  name="img"
                  type="text"
                  value={employee.img}
                  placeholder={"Img URL"}
                  handleChange={handleChange}
                />
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Close
          </button>
          <button  onClick={handleClose} form="add-form" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddEmployee;