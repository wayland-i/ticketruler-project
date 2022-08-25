import React, {useState} from "react";

function Card({show}) {

    const [toggle, setToggle] = useState(false)
    console.log(toggle)

    function handleBuyTicket(e, id) {
        e.preventDefault()
        const partySizeInput = e.target.partSize.value

        const data = { show_id: id, user_id: 4, price: 100, party_size: partySizeInput }

        fetch('http://localhost:9292/ticket-create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <div className="Card">
            <p>{show.show_name}</p> 
            <p>{show.show_time}</p> 
            <p>{show.musician}</p> 
            <p>{show.tickets_left}</p> 
            <br></br>
            <img alt="Musician" style={{ width: "15rem" }} src={show.image_url}></img>
            <button onClick={() => setToggle(!toggle)} >Purchase Tickets</button>
            {toggle ? 
            <form onSubmit={(e) => handleBuyTicket(e, show.id)} >
                <input id='partSize' name="partSize" placeholder="Input Party Size"  />
                <button>Submit</button>
            </form>
            : <p>Buy a Ticket!</p>}
        </div>
    )
}

export default Card