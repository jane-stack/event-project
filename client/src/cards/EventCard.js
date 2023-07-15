import { NavLink } from "react-router-dom";

function EventCard ({ event }) {
    
    return (
        <div>
            <tbody>
                <td>{event.name}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>
                    <button><NavLink to={`/events/${event.id}`}>Detail</NavLink></button>
                </td>
            </tbody>
        </div>
    )
}

export default EventCard;