import { useContext, useState } from "react";
import { ErrorContext } from "../context/ErrorContext";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function AttendeeCard ({ attendee, event, editStatus, onDeleteAttendee }) {
    const { setErrors } = useContext(ErrorContext);
    const { user } = useContext(UserContext);
    const [status, setStatus] = useState(attendee.status);
    const navigate = useHistory();

    const deleteAttendeeClick = (id) => {
        fetch(`/events/${event.id}/attendances/${attendee.id}`, {
            method: "DELETE"
        })
        .then(() => onDeleteAttendee(id))
        .then(() => navigate.push('/events'))
        .catch((error) => setErrors(error));
    };

    const statusChange = (e) => {
        e.preventDefault();
        fetch(`/events/${event.id}/attendances/${attendee.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: status })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors);
            } else {
                editStatus(data);
                setErrors([]);
            }
        });
    };

    return (
        <tbody>
            <tr>
                <td>{attendee.user.name}</td>
                <td>{attendee.status}</td>
                <td>
                    {user && user.name === attendee?.user.name && (
                        <>
                        <button onClick={statusChange} value={status} onChange={(e) => setStatus(e.target.value)}>Status</button>
                        <button onClick={deleteAttendeeClick}>Not Going</button>
                        </>
                    )}
                </td>
                </tr>
        </tbody>
    )
}

export default AttendeeCard;