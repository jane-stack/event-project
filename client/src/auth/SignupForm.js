import Errors from "../errors/Errors";

function SignupForm() {

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Create an Account</h3>
            <div>
            Full Name &nbsp;
            <input
            type="text"
            name="first_name"
            id="first_name"
            required={true}
            />
            </div>
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
            <button type="submit">Signup</button>
            <Errors />
        </form>
    )
}

export default SignupForm;