import React, {useState, useEffect} from "react";


  //check login info
  // if true: log user in (useRef?)
  // if false: respond Email or Password incorrect
function Login({users, setUserId}) {

    const [allUsers, setAllUsers] = useState([])
          const url = 'http://localhost:9292/users'
          useEffect(() => {
            fetch(url)
            .then((r) => r.json())
            .then((data) => setAllUsers(data) )
          }, [])

    function myFunction(e){
      e.preventDefault()
      console.log(e.target.email.value, e.target.password.value)
      const loginInputs = {"email": e.target.email.value}
      console.log(allUsers)
      console.log(loginInputs)
      const found = allUsers.findIndex(({email}) => email === e.target.email.value)
      const loggedInUser = (found + 1)
      console.log(loggedInUser)
      setUserId(loggedInUser)

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