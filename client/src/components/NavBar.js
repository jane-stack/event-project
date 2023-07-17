import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function NavBar() {
    const navigate = useNavigate('/');
    const { user, logoutUser, loggedIn } = useContext(UserContext);

    // handles the logout button
    const logoutButton = () => {
        fetch('/logout', { method: "DELETE" })
        .then(logoutUser())
        .then(() => navigate('/'))
    }

    
    // if user logged in
    const userIn = () => {
        return (
            <>
            <div><h4>You are Logged in as {user.name}</h4></div>
            <Link to="/events" className="nav-link">Find Events</Link>
            <Link to="/create" className="nav-link">Create Event</Link>
            <Link to="#" className="nav-link" onClick={logoutButton}>Logout</Link>
            </>
        )
    }

    // if user loggout out
    const userOut = () => {
        <>
        <div><h4>Please Log in!</h4></div>
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