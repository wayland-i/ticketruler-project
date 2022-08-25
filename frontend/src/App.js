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
    fetch("http://localhost:9292/")
    .then((r) => r.json())
    .then((shows) => setShows(shows));
  }, [])



  const [user, setUser] = useState([]) 
  
  useEffect(() => {
    fetch(`http://localhost:9292/users/4`)
    .then((r) => r.json())
    .then((user) => setUser(user))
    // .catch((error) => console.error("Error", error))
  }, [])



  const [searchString, setSearchString] = useState('')

  const filtered = shows.filter( obj => {
    return (
      obj.show_name.toLowerCase().includes(searchString.toLowerCase())
      ||
      obj.musician.toLowerCase().includes(searchString.toLowerCase())
      ||
      obj.show_time.toLowerCase().includes(searchString.toLowerCase())
    )
  })


  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<HomePage shows={filtered} setSearchString={setSearchString} />} />
          <Route path='/AccountInfo' element={<AccountInfo setUser={setUser}/>} />
          <Route path='/MyTickets' element={<MyTickets user={user}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;


