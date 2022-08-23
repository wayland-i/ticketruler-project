import './App.css';
import React, {useEffect, useState} from "react";
import CardContainer from './CardContainer';
import SearchBar from './SearchBar';



function App() {
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/shows")
    .then((r) => r.json())
    .then((shows) => setShows(shows));
  }, [])
  
  return (
    <div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
      }}>
        <h1>TicketRuler</h1>
        <input placeholder="search for an upcoming show..." style={{width: "200px", height: "50px"}}></input>
      </div>
      <div style={{ 
        backgroundColor: 'blue',
        height: '0%'
         }}>
          <div>
            {shows.map((show) => {
              return (
                <p style={{
                  textAlign: "center",
                  border: "grey solid 1px",
                  padding: "1rem",
                  width: "15rem",
                  height: "25rem",
                  display: "inline-grid",
                  margin: "1rem 2rem",
                  boxShadow: "3px 4px #e04b52"
                }}>
                  {show.show_name} <br></br>
                  {show.show_time} <br></br>
                  {show.musician} <br></br>
                  {show.tickets_left} <br></br>
                  <img style={{ width: "15rem" }}src={show.image_url}></img>

                </p>
              )
            })}  
          </div> 
      </div>

            <CardContainer/>

      
    </div>
  )
}

export default App;


// card container 
// card container child
// search bar
// header (user in top right, "my tickets")
// my tickets component (new page, react routes)