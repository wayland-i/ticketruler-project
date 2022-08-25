import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="NavBar">
            <p className="Link" >
                <Link to="/">Main Menu</Link>
            </p>
            <p className="Link" >
                <Link to="/AccountInfo">Account</Link>
            </p>
            <p className="Link" >
                <Link to="/MyTickets">My Tickets</Link>
            </p>
        </div>
    );
}

export default Navbar;