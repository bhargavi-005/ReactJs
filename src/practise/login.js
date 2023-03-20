import React from "react";

function LogIn(props){

    return(
        <form>
        <input type="text" placeholder= "name"></input>
        <input type="password" placeholder= "Password"></input>
        {props.registerd==false&& <input type="password" placeholder= "confirm password"></input>}
        
        <button type="submit">
        {props.registerd ? "login": "Register"}
        </button>
        </form>
    )
}

export default LogIn;