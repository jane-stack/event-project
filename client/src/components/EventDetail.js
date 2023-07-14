import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ErrorContext } from "../context/ErrorContext";
import Errors from "../errors/Errors";

function EventDetail ({addAttendee}) {
    const { events } = useContext(EventContext);
    const { user } = useContext(UserContext);
    const { setErrors } = useContext(ErrorContext);
    const id = parseInt(useParams().id);
    const event = events.find(event => event.id === id);
    const navigate = useHistory();

    const attendButton = () => {
        fetch(`/events/${id}/attendances`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                eventId: event.id,
                userId: user
            }),
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                addAttendee(data)
                setErrors([])
                navigate.push('/main')
            }
        })
    }
    
    return (
        <div>
            <h1>{event.name}</h1>
            <p>Organizer: {event.organizer.name}</p>
            <h6>{event.date}</h6>
            <h6>{event.location}</h6>
            <button onClick={attendButton}>I want to Attend</button>
            <Errors />
            <br />
            <br />
            <br />
            <hr />
            <h3>People Attending:</h3>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>status</th>
                </tr>
            </thead>
            <div>
                {event.attendances.map(a => (
                    <tbody key={a.id}>
                        <td>{a.user.name}</td>
                        <td>{a.status}</td>
                    </tbody>
                ))}
            </div>
        </div>
    )
}

export default EventDetail;