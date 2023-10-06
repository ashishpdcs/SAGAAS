import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import '../../saga-demo/node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../saga-demo/node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Signup from './Pages/Signup';
import HeaderTop from './component/HeaderTop';
import Employee from './Pages/Employee';
import EmployeeUser from './Pages/EmployeeUser';
import Error from './Pages/Error';
import WrongPage from './Pages/WrongPage';

function App() {
  return (
    <Router>
      <HeaderTop />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/employee" element={<Employee/>} />
        <Route path="/employeeUser" element={<EmployeeUser/>} />
        <Route path='*' element = {<Error/>}/>
        <Route path='/Home' element ={<Home/>}/>
        <Route path="/wrong-page" element={<WrongPage/>} />
      </Routes>
      {/* <Footerbottom /> */}
    </Router>

  );
}

export default App;
