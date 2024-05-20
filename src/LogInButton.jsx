import { useEffect, useState } from "react";
import "./LogInButton.css"


function LogInButton({ isLoggedIn, user, handleUser }) {
    if (!isLoggedIn) {
        return (
            <button className="btn rounded-1 submit" onClick={(e) => {e.preventDefault(); handleUser(isLoggedIn)}}>Log In</button>
        )
    }
    else {
        return (
            <button className="btn rounded-1 submit" onClick={(e) => {e.preventDefault(); handleUser(isLoggedIn)}}>Log Out</button>
        )
    }
}

export default LogInButton;