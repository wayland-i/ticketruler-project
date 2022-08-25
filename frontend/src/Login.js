import React, {useState} from "react";


  //check login info
  // if true: log user in (useRef?)
  // if false: respond Email or Password incorrect
function Login({users, setUser}) {

    function myFunction(e){
      e.preventDefault()
      console.log(e.target.email.value, e.target.password.value)


    }   
    
    const [errorMessage, setErrorMessage] = useState('')

    return(
      <>
        <p>User Login</p>
         <form action="/action_page.php" method="get" id="nameform" onSubmit={(e)=>myFunction(e)}>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"/><br></br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"/> <br></br>
            <button type="submit" form="nameform" value="Submit">Submit</button>
         </form>
         
         <p>{errorMessage}</p>
      </>
    )
}

export default Login