import React from "react";

function Ticket({ticket}) {

    return (
        <div className="Card">
            <p>{ticket.price}</p>
        </div>
    )
}

export default Ticket