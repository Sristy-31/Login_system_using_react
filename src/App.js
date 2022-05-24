import React from "react";
import Registration from './components/Registration';
import Login from './components/Login';
import { BrowserRouter as Router ,Route, Routes, Navigate, Link} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
         <Route exact path = "/" element={<Login/>}></Route>
         <Route path = "/register" element={<Registration/>}></Route>
       </Routes>
       </div>
   </Router>
  );
}

export default App;
