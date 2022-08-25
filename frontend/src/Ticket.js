import React from "react";

function Ticket({ticket, handleUpdate, handleDelete}) {

    return (
        <div className="Card">
            <p>Price: {ticket.price}</p>
            <p>Party Size: {ticket.party_size}</p>
            <p>{ticket.show.show_name}</p>
            <p>{ticket.show.show_time}</p>
            <button onClick={() => handleUpdate(ticket.id) } >Edit Party Size</button>
            <button onClick={() => handleDelete(ticket.id) } >Cancel</button>
        </div>
    )
}

export default Ticket