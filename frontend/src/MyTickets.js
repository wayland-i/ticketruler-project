import React, {useState, useEffect} from "react";
import Ticket from "./Ticket";

function MyTickets({ user }) {
    // console.log(user.tickets)

    const [userTickets, setUserTickets] = useState([])
    console.log(user.tickets)
    console.log(userTickets)

    useEffect(() => {
        if ( user.length !== 0 ) {

            setUserTickets(user.tickets)
            // user.tickets.map((ticket) => {
            //     setUserTickets([...userTickets, ticket])
            // })
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