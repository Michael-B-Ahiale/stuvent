import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import './style.scss'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {

  const{currentUser}=useContext(AuthContext);
  const ProtectRoute=({children})=>{
    if(!currentUser){
      return<Navigate to= '/Login'/>
    }
    return children
  }
  return (
      <Router>

        <Routes>
          <Route path="/" element={<ProtectRoute><Home/></ProtectRoute>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route/>
        </Routes>

      </Router>
  );
}

export default App;
