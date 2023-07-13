import Errors from "../errors/Errors";

function LoginForm() {
    
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Login to Student Account</h3>
            <div>
            Email &nbsp;
            <input
            type="text"
            name="email"
            id="email"
            required={true}
            />
            </div>
            <div>
            Password &nbsp;
            <input
            type="password"
            name="password"
            id="password"
            required={true}
            />
            </div>
            <button type="submit">Log In</button>
            <Errors />
        </form>
    )
}

export default LoginForm;