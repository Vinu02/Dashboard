import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./css/sb-admin-2.css";
import Sidebar from './Sidebar';
// import "./css/fontawesome-free/css/all.min.css";
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './Users';


function App() {
  return (
    <BrowserRouter>
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Topbar/>
        <Routes>
       <Route path='/dashboard' element={<Dashboard/>}></Route>
       <Route path='/users' element={<Users/>}></Route>
        </Routes>
      </div>
      </div>
    </div>
    
    </BrowserRouter>
    
  );
}

export default App;