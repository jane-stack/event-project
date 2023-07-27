import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import { ErrorContext } from "../context/ErrorContext";

function AttendEventForm ({ addAttendee }) {
    const { events } = useContext(EventContext);
    const { setErrors } = useContext(ErrorContext);
    const [eventId, setEventId] = useState("");
    const [status, setStatus] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/attendances`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                event_id: eventId,
                status: status
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                addAttendee(data)
                setErrors([])
                setStatus("")
                setEventId("")
            }
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Attend An Event</h2>
            <div>
                <select
                id="event"
                value={eventId}
                onChange={(e) => setEventId(e.target.value)}
                >
                    <option value="">Select Event...</option>
                    {events.map((event) => (
                        <option key={event.id} value={event.id}>{event.name}</option>
                    ))}
                </select>
                <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="">Status</option>
                    <option>attending</option>
                    <option>maybe</option>
                </select>
                <button type="submit">Attend</button>
            </div>
        </form>
    )
}

export default AttendEventForm;