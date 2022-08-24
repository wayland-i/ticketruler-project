import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="NavBar">
            <li>
                <Link to="/">Main Menu</Link>
            </li>
            <li>
                <Link to="/AccountInfo">Account</Link>
            </li>
            <li>
                <Link to="/MyTickets">My Tickets</Link>
            </li>
        </div>
    );
}

export default Navbar;