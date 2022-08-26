import React, { useEffect, useState } from "react";
import DeleteAccount from "./DeleteAccount";


function CurrentUser({ userId }) {
    
    
    return (
        <div>
            <h1>logged in as {userId}</h1>
            <DeleteAccount userId={userId} />
        </div>
    )
}

export default CurrentUser