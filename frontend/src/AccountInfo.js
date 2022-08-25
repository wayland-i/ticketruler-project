import React, {useState} from "react";
import Login from "./Login";
import CreateUser from "./CreateUser";

function AccountInfo() {

   const [newUser, setNewUser] = useState(true)

    function click (){
        setNewUser(newUser=>!newUser)
    }

    const [users, setUsers] = useState([])
    //check if user already exists
    useEffect(() => {
            fetch("http://localhost:9292/users")
            .then((r) => r.json())
            .then((user) => setUsers(user));
          }, [])

    return (
        <>
         <button onClick={click}>{newUser?"Login": "Create Account"}</button>
         {newUser?<CreateUser users = {users}/>:<Login users = {users}/>}
        </> 
    )
}

export default AccountInfo