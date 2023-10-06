import React from 'react'
import dcslogo from '../../src/assets/Img/dcs.png';

function Footerbottom() {
  return (
    <footer style={{
        backgroundColor: 'lightgray', padding: '10px 0',
        textAlign: 'center', width: '100%'
      }}>
        <img
          src={dcslogo}
          alt="Dynamic Code Swith"
          style={{ height: '40px' }}
        />
        <div style={{ marginTop: '10px', color: "black", fontFamily: "inherit"}}>
          <div>Mobile : +704-645-4058</div>
          <div>Email : aspatel@gmail.com</div>
          <div>Address : 1114 SunWest Bank, Ahmedabad, India</div>
        </div>
      </footer>
  )
}

export default Footerbottom