import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import Axios from 'axios';



interface UserData {
  id: number;
  email: string;
  password: string;
}

interface PopupProps {
  openPopup: boolean;
  setOpenPopup: (open: boolean) => void;
  title: string;
}

const Popup: React.FC<PopupProps> = ({ openPopup, setOpenPopup, title }) => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editedEmail, setEditedEmail] = useState<string>('');
  const [editedPassword, setEditedPassword] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/data');
        setUserData(response.data);
      } catch (error) {
      }
    };

    if (openPopup) {
      fetchData();
    }
  }, [openPopup]);

  const handleDataSubmission = (newUserData: UserData) => {
    setUserData([...userData, newUserData]);
    setOpenPopup(false);
  };

  const handleEdit = (user : UserData) => {
    setEditingId(user.id);
    setEditedEmail(user.email);
    setEditedPassword(user.password);
  };
  
  const handleDelete = (user : UserData) => {

  };

  return (
    <>
    <Dialog open={openPopup} fullScreen>
        <DialogTitle>{title}</DialogTitle>
        <Button
          variant="contained"
          color="primary"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            zIndex: 1,
          }}
          onClick={() => {
          } }
        >
          Add New User
        </Button>

        {/* <table>
          <thead>
            <tr>
              <th align='left'>ID</th>
              <th align='left'>Email</th>
              <th align='left'>Password</th>
              <th align='left'>Action</th>
            </tr>
            <br></br>
          </thead>
          <tbody>
            {Array.isArray(userData) && userData.length > 0 ? (
              userData.map((user) => (
                <tr key={user.id}>
                  <td align='left'>{user.id}</td>
                  <td align='left'>{user.email}</td>
                  <td align='left'>{user.password}</td>
                  <td align='left'>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={() => handleDelete(user)}>delete</button>
                  </td>
                </tr>
              ))
            )
              : (
                <tr>
                  <td colSpan={4}>No data available</td>
                </tr>
              )}
          </tbody>
        </table> */}

      </Dialog></>
  );
};

export default Popup;
