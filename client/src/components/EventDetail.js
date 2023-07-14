import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import { useParams } from "react-router-dom";

function EventDetail () {
    const { events } = useContext(EventContext);
    const id = parseInt(useParams().id);
    const event = events.find(event => event.id === id);
    
    return (
        <div>
            <h1>{event.name}</h1>
            <p>Organizer: {event.organizer.name}</p>
            <h6>{event.date}</h6>
            <h6>{event.location}</h6>
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