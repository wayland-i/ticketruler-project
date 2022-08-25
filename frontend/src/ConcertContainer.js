import React from "react";
import Card from "./Card";


function ConcertContainer({shows, setCurrentShow}) {

    const createCards = shows.map( show => {
            return <Card setCurrentShow={setCurrentShow} key={show.id} show={show} />
        })
    
    

    return (
        <div className="ConcertContainer" >
            <p className="upcomingshows">Upcoming Shows!</p>
            {createCards}
        </div>
    )
}

export default ConcertContainer