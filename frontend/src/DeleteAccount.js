import React from "react";

function DeleteAccount ({ userId }) {

    function myFunciton () {
        fetch(`http://localhost:9292/users/${userId}`, {
            method: "DELETE",
        })
        alert("account deleted")
    }


    return (
        <div>
            <button onClick={myFunciton}>delete account?</button>
        </div>
    )
}

export default DeleteAccount