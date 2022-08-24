import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';


import AccountInfo from "./AccountInfo";
import MyTickets from "./MyTickets";
import HomePage from "./HomePage";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<HomePage/>} />
          <Route path='/AccountInfo' element={<AccountInfo/>} />
          <Route path='/MyTickets' element={<MyTickets/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
