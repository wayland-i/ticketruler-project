import React, {useState, useEffect} from "react";
import Ticket from "./Ticket";

function MyTickets({ user, handleUpdate }) {

    const [userTickets, setUserTickets] = useState([])

    function handleDelete(id) {
        console.log('handle deelete works')
        console.log(id)
        const deleteArray = userTickets.filter(ticket => {
            return ticket.id !== id
        })
        setUserTickets(deleteArray)
        fetch(`http://localhost:9292/ticket-delete/${id}`, {
            method: "DELETE",
        })
      }

    useEffect(() => {
        if ( user.length !== 0 ) {
            setUserTickets(user.tickets)
        }
      }, [user])

      const createTickets = userTickets.map(ticket => {
        return (<Ticket handleDelete={handleDelete} handleUpdate={handleUpdate} key={ticket.id} ticket={ticket} />)
      })
    

    return (
        <div>
            {createTickets}
        </div>
    )
}

export default MyTickets