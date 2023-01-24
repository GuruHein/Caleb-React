import { useState } from "react";
import Employee from "../components/Employee";
import { v4 as uuidv4 } from "uuid";
import AddEmployee from "../components/AddEmployee";

function Employees() {
  const [employees, setEmployees] = useState(
    [
      {
        "id": 1,
        "name": "Guru 1",
        "role": "Developer",
        "img": "https://images.pexels.com/photos/4122861/pexels-photo-4122861.jpeg?auto=compress&cs=tinysrgb&w=1600"
      },
      {
        "id": 2,
        "name": "Guru 2",
        "role": "Developer",
        "img": "https://images.pexels.com/photos/4122861/pexels-photo-4122861.jpeg?auto=compress&cs=tinysrgb&w=1600"
      },
      {
        "id": 3,
        "name": "Guru 3",
        "role": "Developer",
        "img": "https://images.pexels.com/photos/4122861/pexels-photo-4122861.jpeg?auto=compress&cs=tinysrgb&w=1600"
      },
      {
        "id": 4,
        "name": "Guru 4",
        "role": "Developer",
        "img": "https://images.pexels.com/photos/4122861/pexels-photo-4122861.jpeg?auto=compress&cs=tinysrgb&w=1600"
      },
      {
        "id": 5,
        "name": "Guru 5",
        "role": "Developer",
        "img": "https://images.pexels.com/photos/4122861/pexels-photo-4122861.jpeg?auto=compress&cs=tinysrgb&w=1600"
      }
    ]
  )

  function updateEmployee(emp) {
    const updatedEmpployees = employees.map(employee => {
        if (employee.id === emp.id) {
            return {...employee, ...emp}
        }
        return employee
    })
    setEmployees(updatedEmpployees)
  }

  function addEmployee(emp) {
    if (emp.name !== "" && emp.role !== "" && emp.img !== "") {
      const employee = {...emp, id: employees.length + 1}
      const orgEmployees = [...employees, employee]
      setEmployees(orgEmployees)
    }
  }
  
  return (
    <div>
      <div className="employees flex flex-wrap justify-center">
        {
          employees.map(
            employee => {
              return (
                <Employee 
                    key={uuidv4()}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    updateEmployee={updateEmployee} 
                />
              )
            }
          )
        }
      </div>
      <AddEmployee
        addEmployee={addEmployee}
      />
    </div>
  );
}

export default Employees;
