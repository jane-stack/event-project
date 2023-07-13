import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function NavBar() {
    const navigate = useHistory();
    const {logoutUser, loggedIn} = useContext(UserContext);

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
            <p>Logged in</p>
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