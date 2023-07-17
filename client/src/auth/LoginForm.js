import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ErrorContext } from "../context/ErrorContext";
import Errors from "../errors/Errors";
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const { loginUser, loggedIn } = useContext(UserContext);
    const { setErrors } = useContext(ErrorContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (loggedIn) {
            navigate("/events")
        } else {
            return (
                setErrors([])
            )
        }
    }, [loggedIn, navigate, setErrors])

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/login', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
                setPassword("");
            } else {
                loginUser(data);
                navigate('/events')
            }
        })
    }
    

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Login to Student Account</h3>
            <div>
            Email &nbsp;
            <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
            />
            </div>
            <div>
            Password &nbsp;
            <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
            />
            </div>
            <button type="submit">Log In</button>
            <Errors />
        </form>
    )
}

export default LoginForm;