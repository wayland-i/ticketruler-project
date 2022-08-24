import {useEffect, useState} from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

import AccountInfo from "./AccountInfo";
import MyTickets from "./MyTickets";
import HomePage from "./HomePage";


function App() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/shows")
    .then((r) => r.json())
    .then((shows) => setShows(shows));
  }, [])

  const [user, setUser] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/4")
    .then((r) => r.json())
    .then((user) => setUser(user));
  }, [])

  
  

  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<HomePage shows={shows} />} />
          <Route path='/AccountInfo' element={<AccountInfo/>} />
          <Route path='/MyTickets' element={<MyTickets user={user}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;


