import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'


const Error = () => {
    const navigate = useNavigate();
    const redirectHome = () => {
        navigate("/Home");
    };

    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you're looking for doesn't exist.
                </p>
                <a className="btn btn-primary" onClick={redirectHome}>Back to Home</a>
            </div>
        </div>

    )
}

export default Error