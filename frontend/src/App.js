import './App.css';
import React, {useEffect, useState} from "react";



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
        height: '500px'
         }}>
          <ul>
            {shows.map((show) => {
              return (
                <h1>{show.show_name}</h1>
              )
            })}  
          </ul> 
      </div>


      
    </div>
  )
}

export default App;









// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }