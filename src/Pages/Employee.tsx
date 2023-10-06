import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import WrongPage from './WrongPage';

interface Employee {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Password: string;
  UserName: string;
}

const Employee = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [redirectToErrorPage, setRedirectToErrorPage] = useState<boolean>(false);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees/getallemployees' , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken') || ''}`,
        },
      });
      console.log(response.status);
      if (response.status === 200) {
      setEmployees(response.data.employees);
      } else if (response.status === 401) {
        console.log(response.status);
        return <Login/>;
      }else if (response.status === 500) {
        setRedirectToErrorPage(true);
      }
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAddUser = () => {
    navigate("/employeeUser");
  }

  if (redirectToErrorPage) {
    return <WrongPage />;
  }

  //SEARCH API
  const handleEdit = async (employeeId: number) => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees/searchemployee', {
        params: { id: employeeId },
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken') || ''}`,
        },
      });

      const { employees } = response.data;
      if (employees.length > 0) {
        setSelectedEmployee(employees[0]);
        setEditModalOpen(true);
      } else {
        console.log('Employee not found');
      }
    } catch (error) {
      console.error('Error searching for employee:', error);
    }
  }

  const handleCloseEditModal = () => {
    setEditModalOpen(false);
    setSelectedEmployee(null);
  }

  //UPDATE API
  const handleUpdateEmployee = async () => {
    if (!selectedEmployee) {
      console.error('No employee selected for update');
      return;
    }
  
    try {
      const response = await axios.put(`http://localhost:5000/api/employees/updateemployee/${selectedEmployee.Id}`, {
        FirstName: selectedEmployee.FirstName,
        LastName: selectedEmployee.LastName,
        Email: selectedEmployee.Email,
        Password: selectedEmployee.Password,
        UserName: selectedEmployee.UserName,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken') || ''}`,
        },
      });
  
      if (response.status === 200) {
        console.log('Record Updated');
        handleCloseEditModal();
        fetchEmployees();
      } else {
        console.error('Error updating record:', response.data.error);
      }
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  //DELETE API
  const handleDelete = async (employeeId: number) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/employees/deleteemployee/${employeeId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwtToken') || ''}`,
        },
      });
  
      if (response.status === 200) {
        console.log('Record Deleted');
        fetchEmployees(); 
      } else {
        console.error('Error deleting record:', response.data.error);
      }
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: '16px' }}
        onClick={handleAddUser}
      >
        Add User
      </Button>
      <div className="table-responsive">
        <br/>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>User Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.Id}>
                <td>{index + 1}</td>
                <td>{employee.FirstName}</td>
                <td>{employee.LastName}</td>
                <td>{employee.Email}</td>
                <td>{employee.Password}</td>
                <td>{employee.UserName}</td>
                <td>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: '8px' }}
                    onClick={() => handleEdit(employee.Id)}
                    data-bs-toggle="modal" data-bs-target="#exampleModal"
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDelete(employee.Id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">User Form</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseEditModal} />
            </div>
            <div className="modal-body">
              {selectedEmployee && (
                <form>
                  <TextField
                    label="First Name"
                    variant="outlined"
                    value={selectedEmployee.FirstName}
                    margin="normal"
                    onChange={(e) => setSelectedEmployee({ ...selectedEmployee, FirstName: e.target.value })}
                  />
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    value={selectedEmployee.LastName}
                    margin="normal"
                    onChange={(e) => setSelectedEmployee({ ...selectedEmployee, LastName: e.target.value })}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    value={selectedEmployee.Email}
                    margin="normal"
                    onChange={(e) => setSelectedEmployee({ ...selectedEmployee, Email: e.target.value })}
                  />
                  <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={selectedEmployee.Password}
                    margin="normal"
                    onChange={(e) => setSelectedEmployee({ ...selectedEmployee, Password: e.target.value })}
                  />
                  <TextField
                    label="User Name"
                    variant="outlined"
                    value={selectedEmployee.UserName}
                    margin="normal"
                    onChange={(e) => setSelectedEmployee({ ...selectedEmployee, UserName: e.target.value })}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '16px' }}
                    onClick={handleUpdateEmployee}
                  >
                    Save Changes
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Employee;
