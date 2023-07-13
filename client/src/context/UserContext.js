import { createContext, useEffect, useState } from "react";

const UserContext = createContext({});
const UserProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loggedIn, setLoggedIn] = useState([]);

    useEffect(() => {
        fetch('/me')
        .then(resp => {
            if (resp.ok) {
                resp.json().then(data => {
                    setUser(data)
                    data.error ? setLoggedIn(false) : setLoggedIn(true)
                })
            }
        })
    }, [])

    const loginUser = (user) => {
        setUser(user)
        setLoggedIn(true);
    }

    const logoutUser = () => {
        setUser({});
        setLoggedIn(false);
    }

    const addUser = (user) => {
        setUser(user)
        setLoggedIn(true);
    }

    return (
        <UserContext.Provider value={{user, loggedIn, loginUser, logoutUser, addUser}}>{children}</UserContext.Provider>
    )
}

export {UserContext, UserProvider}