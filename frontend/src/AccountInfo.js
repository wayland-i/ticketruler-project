import React, {useEffect,useState} from "react";
import Login from "./Login";
import CreateUser from "./CreateUser";

function AccountInfo() {

   const [newUser, setNewUser] = useState(true)

    function click (){
        setNewUser(newUser=>!newUser)
    }


//   useEffect(() => {
//     fetch("http://localhost:9292/users")
//     .then((r) => r.json())
//     .then((user) => console.log(user));
//   }, [])

    return (
        <>
         <button onClick={click}>{newUser?"Login": "Create Account"}</button>
         {newUser?<CreateUser/>:<Login/>}
        </> 
    )
}

export default AccountInfo