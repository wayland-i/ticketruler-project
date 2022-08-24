import React from "react";

function Ticket({ticket}) {

    return (
        <div>
            <p>{ticket.price}</p>
        </div>
    )
}

export default Ticket