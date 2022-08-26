import {useEffect, useState} from "react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';

import AccountInfo from "./AccountInfo";
import MyTickets from "./MyTickets";
import HomePage from "./HomePage";
import CurrentUser from "./CurrentUser";


function App() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/")
    .then((r) => r.json())
    .then((shows) => setShows(shows));
  }, [])



  const [user, setUser] = useState([]) 

  const [userId, setUserId] = useState(4)

  const [url, setUrl] = useState(`http://localhost:9292/users/${userId}`)


  
  useEffect(() => {
    fetch(url)
    .then((r) => r.json())
    .then((user) => setUser(user))
    // .catch((error) => console.error("Error", error))
  }, [url])


  useEffect(() => {
    console.log(userId)
    console.log(url)
    setUrl(`http://localhost:9292/users/${userId}`) 
    console.log(url)
  }, [userId])



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
        <CurrentUser userId={userId}/>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<HomePage shows={filtered} setSearchString={setSearchString} userId={userId}/>} />
          <Route path='/AccountInfo' element={<AccountInfo setUserId={setUserId}/>} />
          <Route path='/MyTickets' element={<MyTickets user={user}/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;


