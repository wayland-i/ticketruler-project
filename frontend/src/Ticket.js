import React, {useState} from "react";

function Ticket({ticket, handleUpdate, handleDelete}) {

    const [toggle, setToggle] = useState(false)


    return (
        <div className="Card">
            <p>Price: {ticket.price}</p>
            <p>Party Size: {ticket.party_size}</p>
            <p>{ticket.show.show_name}</p>
            <p>{ticket.show.show_time}</p>
            <button onClick={() => setToggle(!toggle) } >Edit Party Size</button>
            {toggle ?
            <form onSubmit={(e) => handleUpdate(e, ticket.id)} >
                <br></br>
                <input id='newPartySize' name="newPartySize" placeholder="Input Party Size to Update" />
                <button>Submit</button>
            </form>
            :
            <p></p>}
            <button onClick={() => handleDelete(ticket.id) } >Cancel</button>
        </div>
    )
}

export default Ticket