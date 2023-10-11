import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { loginRequest } from '../store/auth/actions';
import { connect } from 'react-redux';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const EmployeeUser = () => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [userName, setUserName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [nameError, setNameError] = useState<string>('');
    const [lastNameError, setLastNameError] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [userNameError, setUserNameError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');

    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let isValid = true;

        if (!firstName) {
            setNameError('First Name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!lastName) {
            setLastNameError('Last Name is required');
            isValid = false;
        } else {
            setLastNameError('');
        }

        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!isValidEmail(email)) {
            setEmailError('Invalid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!userName) {
            setUserNameError('User Name is required');
            isValid = false;
        } else {
            setUserNameError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            try {
                 const token = localStorage.getItem('jwtToken');
                const response = await fetch('http://localhost:5000/api/employees/createEmployee', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        FirstName: firstName,
                        LastName: lastName,
                        Email: email,
                        UserName: userName,
                        Password: password,
                    }),
                });

                if (response.status === 200) {
                    console.log('Employee added successfully');
                    navigate("/employee");
                } else {
                    console.log(response.status);
                    console.error('Error adding employee');
                }
            } catch (error) {
                console.error('Error adding employee:', error);
            }
        }
    };

    const isValidEmail = (value: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    };

    return (
        <>
            <Container component="main" maxWidth="lg">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '79.9vh' }}>
                    <form onSubmit={handleSubmit} style={{ padding: '100px 0' }}>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            margin="normal"
                            error={!!nameError}
                            helperText={nameError}
                        />
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            margin="normal"
                            error={!!lastNameError}
                            helperText={lastNameError}
                        />
                        <TextField
                            label="Email"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            margin="normal"
                            error={!!emailError}
                            helperText={emailError}
                        />
                        <TextField
                            label="Password"
                            variant="outlined"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            error={!!passwordError}
                            helperText={passwordError}
                        />
                        <TextField
                            label="User Name"
                            variant="outlined"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            margin="normal"
                            error={!!userNameError}
                            helperText={userNameError}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{ marginTop: '16px' }}
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </Container>
        </>
    );
};

const mapDispatchToProps = (dispatch: any) => ({
    SaveLogin: (params: any) => dispatch(loginRequest(params)),
});

export default connect(null, mapDispatchToProps)(EmployeeUser);
