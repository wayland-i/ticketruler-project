import React,{useEffect, useState} from "react";

function CreateUser({users}) {
    
    //create new user
    const myFunction = (e) => {
        e.preventDefault()
        console.log(e.target.name.value, e.target.Email.value, e.target.password.value)
        const newUser = { "full_name": e.target.name.value, "email": e.target.Email.value, "password": e.target.password.value }
        fetch('http://localhost:9292/users',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        alert(`Account Created! Welcome ${e.target.name.value}!`)
        e.target.reset()
        
        
    }


    return(
      <>
        <p>Create Account</p>
        <form action="/action_page.php" method="get" id="nameform" onSubmit={(e)=>myFunction(e)}>
            <label for="name">Username:</label>
            <input type="text" id="name" name="name"/><br></br>
            <label for="Email">Email:</label>
            <input type="text" id="Email" name="Email"/><br></br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password"/>
            <button type="submit" form="nameform" value="Submit" >Submit</button>
         </form>
         
      </>
    )
}

export default CreateUser