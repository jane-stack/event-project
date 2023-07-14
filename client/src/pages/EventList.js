import { useContext } from "react";
import EventCard from "../cards/EventCard";
import Errors from "../errors/Errors";
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
            <h3>LIST OF EVENTS</h3>
            <thead>
                <th>Event Name</th>
                <th>Event Date</th>
                <th>Event Location</th>
                <th></th>
            </thead>
            {renderEvents}
            <Errors />
        </div>
    )
}

export default EventList;