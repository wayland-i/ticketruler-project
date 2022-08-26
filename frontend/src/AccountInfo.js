import React, {useState, useEffect} from "react";
import Login from "./Login";
import CreateUser from "./CreateUser";

function AccountInfo({ setUserId }) {

   const [newUser, setNewUser] = useState(true)

    function click (){
        setNewUser(newUser=>!newUser)
    }

    // const [users, setUsers] = useState([])
    //check if user already exists
    // useEffect(() => {
    //         fetch("http://localhost:9292/users")
    //         .then((r) => r.json())
    //         .then((user) => setUsers(user));
    //       }, [])

    return (
        <div className="createAccount" >

            <div className="AccountForm">
              <br></br>
              <button onClick={click}>{newUser?"Login": "Create Account"}</button>
              {newUser?<CreateUser/>:<Login setUserId={setUserId}/>}
            </div>

        </div> 

    )
}

export default AccountInfo