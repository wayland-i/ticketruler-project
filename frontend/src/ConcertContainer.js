import React from "react";
import Card from "./Card";


function ConcertContainer({shows}) {

    const createCards = shows.map( show => {
            return <Card show={show} />
        })
    
    

    return (
        <div>
            <p className="upcomingshows">Upcoming Shows!</p>
            {createCards}
        </div>
    )
}

export default ConcertContainer