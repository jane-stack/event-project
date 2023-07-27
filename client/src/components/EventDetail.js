import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { EventContext } from "../context/EventContext";
import AttendeeCard from "../cards/AttendeeCard";

function EventDetail () {
    const { user } = useContext(UserContext);
    const { events, deleteEvent } = useContext(EventContext);
    const [attendances, setAttendances] = useState([]);
    const id = parseInt(useParams().id);
    const event = events.find(event => event.id === id);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/events/${event.id}/attendances`)
        .then(resp => resp.json())
        .then(data => setAttendances(data))
    }, [event.id])

    // handles deleting attendances
    const onDeleteAttendee = (id) => {
        const updatedStatusList = attendances.filter(attendee => attendee.id !== id)
        setAttendances(updatedStatusList);
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

    // handles deleting an event
    const onDeleteEvent = () => {
        fetch(`/events/${event.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(deleteEvent(event.id))
        .then(navigate('/events'))
    }

    const renderAttendees = attendances.map(attendee => {
        return (
            <AttendeeCard
                key={attendee.id}
                attendee={attendee}
                event={event}
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
            <br /><br /><br />
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