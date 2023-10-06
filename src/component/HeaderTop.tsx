import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Tab, Popover, Tabs, Drawer } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import InboxIcon from '@mui/icons-material/MoveToInbox';

const HeaderTop = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#lightgray"}}>
        <div className="container-fluid">
          <Button onClick={() => setIsDrawerOpen(true)}>
            <ShoppingCartCheckoutIcon />
          </Button>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Menu
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex Loginbtn">
              <Link to="/login" className='btn btn-primary'>
                Login
              </Link>
              <Link to='/Signup' className='btn btn-primary'>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Drawer anchor="left" style={{ padding: '30px' }} open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
          onKeyDown={() => setIsDrawerOpen(false)}
        >
          <ul className='leftMenuLink'>
            <li><Link to="/PopUpTwo"> <InboxIcon /> Home</Link></li>
            <li><Link to="/about-us"> <InboxIcon /> About Us</Link></li>
            <li><Link to="/PopUpTwo"> <InboxIcon /> Home</Link></li>
          </ul>
        </div>
      </Drawer>
    </>
  )
}

export default HeaderTop