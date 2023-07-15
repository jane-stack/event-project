import { useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { EventContext } from "../context/EventContext";
import { ErrorContext } from "../context/ErrorContext";
import Errors from "../errors/Errors";
import { useParams } from "react-router-dom";
import AttendeeCard from "../cards/AttendeeCard";

function EventDetail () {
    const { user } = useContext(UserContext);
    const { events, deleteEvent } = useContext(EventContext);
    const { setErrors } = useContext(ErrorContext);
    const id = parseInt(useParams().id);
    const event = events.find(event => event.id === id);
    const [attendances, setAttendances] = useState([]);
    const navigate = useHistory();

    useEffect(() => {
        fetch(`/events/${event.id}/attendances`)
        .then(resp => resp.json()).then(data => setAttendances(data))
        .catch(errors => setErrors(errors))
    }, [event.id, setErrors])

    const addAttendee = (newAttendee) => {
        setAttendances([...attendances, newAttendee])
    }

    // button click to attend the event
    const attendButton = () => {
        fetch(`/events/${event.id}/attendances`, {
            method: "POST",
        })
        .then(resp => resp.json())
        .then(addAttendee(event.id))
        navigate.push('/events')
    }

    const onDeleteEvent = () => {
        fetch(`/events/${event.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(deleteEvent(event.id))
        navigate.push('/events')
    }

    const renderAttendees = event.attendances.map(attendee => {
        return (
            <AttendeeCard
                key={attendee.id}
                attendee={attendee}
            />
        )
    })
    
    return (
        <div>
            <h1>{event.name}</h1>
            <p>Organizer: {event.organizer.name}</p>
            <h6>{event.date}</h6>
            <h6>{event.location}</h6>
            {user && user.name === event.organizer?.name && (
                <>
                    <button><NavLink to={`/events/${event.id}/edit`}>Edit Event</NavLink></button>
                    <button onClick={onDeleteEvent}>Cancel Event</button>
                </>
            )}
            <button onClick={() => attendButton()}>Attend This Event</button>
            <Errors />
            <br />
            <br />
            <br />
            <hr />
            <h3>People Attending:</h3>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Change Status</th>
                </tr>
            </thead>
            {renderAttendees}
        </div>
    )
}

export default EventDetail;