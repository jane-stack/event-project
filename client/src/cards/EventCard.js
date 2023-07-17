import { Link } from "react-router-dom";

function EventCard ({ event }) {
    
    return (
            <tbody>
                <tr>
                    <td>{event.name}</td>
                    <td>{event.date}</td>
                    <td>{event.location}</td>
                    <td>
                        <button><Link to={`/events/${event.id}`}>Detail</Link></button>
                    </td>
                </tr>
            </tbody>
    )
}

export default EventCard;