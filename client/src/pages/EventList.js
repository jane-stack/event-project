import { useContext } from "react";
import EventCard from "../cards/EventCard";
import { EventContext } from "../context/EventContext";

function EventList () {
    const { events } = useContext(EventContext);

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
        </div>
    )
}

export default EventList;