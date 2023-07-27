import { useContext, useEffect, useState } from "react";
import { EventContext } from "../context/EventContext";
import EventCard from "../cards/EventCard";
import AttendEventForm from "../forms/AttendEventForm";

function EventList () {
    const { events } = useContext(EventContext);
    const [allAttendances, setAllAttendances] = useState([]);

    useEffect(() => {
        fetch(`/attending`)
        .then(resp => resp.json())
        .then(data => setAllAttendances(data))
    }, [])

    // handles adding attendances
    const addAttendee = (newAttendee) => {
        setAllAttendances([...allAttendances, newAttendee]);
    };

    const renderEvents = events.map(event => {
        return (
            <EventCard
                key={event.id}
                event={event}
            />
        )
    })

    return (
        <div>
            <h3>List of Active Events</h3>
            <table>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Event Date</th>
                        <th>Event Location</th>
                        <th></th>
                    </tr>
                </thead>
            {renderEvents}
        </table>
        <br /><br /><br />
        <AttendEventForm addAttendee={addAttendee} />
        </div>
    )
}

export default EventList;