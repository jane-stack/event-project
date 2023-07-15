import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function NavBar() {
    const navigate = useHistory();
    const { user, logoutUser, loggedIn } = useContext(UserContext);

    // handles the logout button
    const logoutButton = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        logoutUser()
    }
    navigate.push("/")

    
    // if user logged in
    const userIn = () => {
        return (
            <>
            <div><h4>You are Logged in as {user.name}</h4></div>
            <NavLink to="/events" className="nav-link">Find Events</NavLink>
            <NavLink to="/create" className="nav-link">Create Event</NavLink>
            <NavLink to="#" className="nav-link" onClick={logoutButton}>Logout</NavLink>
            </>
        )
    }

    // if user loggout out
    const userOut = () => {
        <>
        <h4>Please Log in!</h4>
        </>
    }

    return (
        <div className="navbar">
            <div className="nav-title"><h1>Colorado Events</h1></div>
            {loggedIn ? userIn() : userOut()}
        </div>
    )
}

export default NavBar;