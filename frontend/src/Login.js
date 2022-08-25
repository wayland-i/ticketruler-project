import React, {useState} from "react";


  //check login info
  // if true: log user in (useRef?)
  // if false: respond Email or Password incorrect
function Login({users}) {

    function account(e){
      //if (users.find(e.target.value)) {
      //  const loggedIn =  React.createContext(e.target.value) <-- useContext(loggedIn) to assign value
      //}else 
      //  setErrorMessage("Username or Password Incorrect")
    }   
    
    const [errorMessage, setErrorMessage] = useState('')

    return(
      <>
        <p>User Login</p>
         <form action="/action_page.php" method="get" id="nameform">
            <label for="Email">Email:</label>
            <input type="text" id="fname" name="fname"/><br></br>
            <label for="lname">Password:</label>
            <input type="text" id="lname" name="lname"/>
         </form>
         <button type="submit" form="nameform" value="Submit">Submit</button>
         <p>{errorMessage}</p>
      </>
    )
}

export default Login