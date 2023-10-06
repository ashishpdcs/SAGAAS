import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { Button, TextField } from '@mui/material';

interface SetPopupProps {
  openPopup: boolean;
  setOpenPopup: (open: boolean) => void;
  title: string;
  onAddSetUser: (email: string, password: string) => void;
}

const SetPopup: React.FC<SetPopupProps> = ({
  openPopup,
  title,
  onAddSetUser,
  setOpenPopup,
}) => {
  const [newEmail, setNewEmail] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const handleAddUser = () => {
    onAddSetUser(newEmail, newPassword);
    setNewEmail('');
    setNewPassword('');
    setOpenPopup(false);
  };

  return (
    <Dialog open={openPopup}>
      <DialogTitle>{title}</DialogTitle>
      <div>
        <TextField
          label="Email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddUser}
        >
          Add User
        </Button>
      </div>
    </Dialog>
  );
};

interface PopupProps {
  newopenPopup: boolean;
  setnewopenPopup: (open: boolean) => void;
  title: string;
  onAddUser: (email: string, password: string) => void;
}

const Popup: React.FC<PopupProps> = ({
  newopenPopup,
  title,
  onAddUser,
  setnewopenPopup,
}) => {
  const [setPopupOpen, setSetPopupOpen] = useState(false); 

  const handleAddUserButtonClick = () => {
    setSetPopupOpen(true); 
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1,
        }}
        onClick={handleAddUserButtonClick}
      >
        Add New User
      </Button>

      <SetPopup
        openPopup={setPopupOpen}
        setOpenPopup={setSetPopupOpen}
        title="Set User"
        onAddSetUser={onAddUser}
      />
    </div>
  );
};

export default Popup;
