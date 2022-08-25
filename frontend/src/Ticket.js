import React from "react";

function Ticket({ticket}) {

    return (
        <div className="Card">
            <p>{ticket.price}</p>
            <p>{ticket.party_size}</p>
            <p>{ticket.show.show_name}</p>
            <p>{ticket.show.show_time}</p>
            <button>Edit Party Size</button>
            <button>Cancel</button>
        </div>
    )
}

export default Ticket