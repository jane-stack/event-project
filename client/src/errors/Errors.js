import { useContext } from "react";
import { ErrorContext } from "../context/ErrorContext";

function Errors() {
    const { errors } = useContext(ErrorContext);
    const errorList = errors.map((error, idx) => <p key={idx}>{error}</p>)
    return (
        <div className="errors">{errorList}</div>
    )
}

export default Errors;