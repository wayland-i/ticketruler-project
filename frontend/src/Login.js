import React from "react";

function Login() {
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
      </>
    )
}

export default Login