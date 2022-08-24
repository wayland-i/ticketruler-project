import React from "react";

function MyTickets({ user }) {
    return (
        <div>


            {user.tickets.map((ticket) => {
                return (
                    <div className="Card">
                        {ticket.price}
                        
                    </div>
                    
                )
            })}
            
            
        </div>
    )
}

export default MyTickets