import { useEffect, useState } from "react";
import "./Navbar.css"
import LogInButton from "./LogInButton";

function Navbar({user, isLoggedIn, handleUser}) {
    if (isLoggedIn) {
        welcome = <h3>Hi, {user.name} </h3>
    }
    else {
        welcome = <></>
    }
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    {welcome}
                    <LogInButton className="btn rounded-1 submit" isLoggedIn={isLoggedIn} user={user} handleUser={handleUser}/>
                </div>
            </nav>
        </>
    )
}

export default Navbar;