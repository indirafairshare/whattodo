import { useEffect, useState } from "react";
import "./Navbar.css"
import LogInButton from "./LogInButton";

function Navbar({user, isLoggedIn, handleUser}) {
    if (isLoggedIn){ 
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <h4>Welcome, {user.name}</h4>
                    <LogInButton className="btn rounded-1 submit" isLoggedIn={isLoggedIn} user={user} handleUser={handleUser}/>
                </div>
            </nav>
        </>
    )}
    else{
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid">
                    <LogInButton className="btn rounded-1 submit" isLoggedIn={isLoggedIn} user={user} handleUser={handleUser}/>
                </div>
            </nav>
        </>
    )
    }
}

export default Navbar;