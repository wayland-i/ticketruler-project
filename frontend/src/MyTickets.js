import React, {useState, useEffect} from "react";
import Ticket from "./Ticket";

function MyTickets({ user }) {

    const [userTickets, setUserTickets] = useState([])

    useEffect(() => {
        if ( user.length !== 0 ) {
            user.tickets.map((ticket) => {
                setUserTickets([...userTickets, ticket])
            })
        }
      }, [user])

      const createTickets = userTickets.map(ticket => {
        return (<Ticket ticket={ticket} />)
      })
    

    return (
        <div>
            {createTickets}
        </div>
    )
}

export default MyTickets