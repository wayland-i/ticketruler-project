import React, {useState, useEffect} from "react";
import Ticket from "./Ticket";

function MyTickets({ user }) {

    const [userTickets, setUserTickets] = useState([])

    function handleDelete(id) {
        console.log('handle delete works')
        console.log(id)
        const deleteArray = userTickets.filter(ticket => {
            return ticket.id !== id
        })
        setUserTickets(deleteArray)
        fetch(`http://localhost:9292/ticket-delete/${id}`, {
            method: "DELETE",
        })
      }



      function handleUpdate(e, id) {
        e.preventDefault()
        const partySizeInput = e.target.newPartySize.value

        const data = { party_size: partySizeInput }

        fetch(`http://localhost:9292/ticket-patch/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
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