import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { EventContext } from "../context/EventContext";

function EventCard ({ event }) {
    const { user } = useContext(UserContext);
    const { deleteEvent } = useContext(EventContext);

    const onDeleteEvent = () => {
        fetch(`/events/${event.id}`, {
            method: "DELETE",
        })
        .then(resp => resp.json())
        .then(deleteEvent(event.id))
    }
    
    return (
        <div>
            <tbody>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>
                    <button><NavLink to={`/events/${event.id}`}>Detail</NavLink></button>
                    {user && user.name === event.organizer?.name && (
                        <>
                        <button onClick={onDeleteEvent}>Delete</button>
                        </>
                    )} 
                </td>
            </tbody>
        </div>
    )
}

export default EventCard;