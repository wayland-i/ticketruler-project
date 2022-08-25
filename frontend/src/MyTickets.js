import React, {useState, useEffect} from "react";
import Ticket from "./Ticket";

function MyTickets({ user }) {

    const [userTickets, setUserTickets] = useState([])

    useEffect(() => {
        if ( user.length !== 0 ) {
            setUserTickets(user.tickets)
        }
      }, [user])

      const createTickets = userTickets.map(ticket => {
        return (<Ticket key={ticket.id} ticket={ticket} />)
      })
    

    return (
        <div>
            {createTickets}
        </div>
    )
}

export default MyTickets