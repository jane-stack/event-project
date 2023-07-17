import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { EventContext } from "../context/EventContext";
import { useParams } from "react-router-dom";
import AttendeeCard from "../cards/AttendeeCard";
import { ErrorContext } from "../context/ErrorContext";

function EventDetail () {
    const { setErrors } = useContext(ErrorContext);
    const { user } = useContext(UserContext);
    const { events, deleteEvent } = useContext(EventContext);
    const id = parseInt(useParams().id);
    const event = events.find(event => event.id === id);
    const [attendances, setAttendances] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/events/${event.id}/attendances`)
        .then(resp => resp.json()).then(data => setAttendances(data))
        .catch(errors => console.log(errors))
    }, [event.id])

    const addAttendee = (newAttendee) => {
        setAttendances([...attendances, newAttendee]);
    };

    // button click to attend the event
    const attendButton = () => {
        fetch(`/events/${event.id}/attendances`, {
            method: "POST"
        })
        .then(resp => resp.json())
        .then(() => addAttendee(event.id))
        .then(() => navigate('/events'))
        .catch((error) => setErrors(error));
    };

    // handles deleting an event
    const onDeleteEvent = () => {
        fetch(`/events/${event.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(deleteEvent(event.id))
        .then(navigate('/events'))
    }

    // handle editing attendees Status
    const editStatus = (newStatus) => {
        const updatedStatusList = attendances.map(attendee => {
            if (newStatus.id === attendee.id) {
                return newStatus
            } else {
                return attendee
            }
        })
        setAttendances(updatedStatusList);
    }

    // handles deleting attendances
    const onDeleteAttendee = (id) => {
        const updatedStatusList = attendances.filter(attendee => attendee.id !== id)
        setAttendances(updatedStatusList);
    }

    const renderAttendees = attendances.map(attendee => {
        return (
            <AttendeeCard
                key={attendee.id}
                attendee={attendee}
                event={event}
                attendances={attendances}
                editStatus={editStatus}
                onDeleteAttendee={onDeleteAttendee}
            />
        )
    })
    
    return (
        <div>
            <h1>{event.name}</h1>
            <p>{event.organizer.name}</p>
            <p>{event.date}</p>
            <p>{event.location}</p>
            {user && user.name === event.organizer?.name && (
                <>
                    <button><Link to={`/events/${event.id}/edit`}>Edit Event</Link></button>
                    <button onClick={onDeleteEvent}>Cancel Event</button>
                </>
            )}
            <button onClick={attendButton}>Attend This Event</button>
            <br />
            <br />
            <br />
            <h3>People Attending:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Change Status</th>
                    </tr>
                </thead>
            {renderAttendees}
            </table>
        </div>
    )
}

export default EventDetail;