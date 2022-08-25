import React from "react";

function Card({show}) {
    return (
        <div className="Card">
            {show.show_name} <br></br>
            {show.show_time} <br></br>
            {show.musician} <br></br>
            {show.tickets_left} <br></br>
            <img alt="Musician" style={{ width: "15rem" }} src={show.image_url}></img>
        </div>
    )
}

export default Card