import { createContext, useContext, useEffect, useState } from "react";
import { ErrorContext } from "./ErrorContext";

const EventContext = createContext({});
const EventProvider = ({children}) => {
    const { setErrors } = useContext(ErrorContext);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('/events')
        .then(resp => resp.json())
        .then(data => setEvents(data))
        .catch(errors => setErrors(errors))
    }, [setErrors])

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    }

    const editEvent = (newEvent) => {
        const updatedEventList = events.map(event => {
            if (newEvent.id === event.id) {
                return newEvent
            } else {
                return event;
            }
        });
        setEvents(updatedEventList);
    }

    const deleteEvent = (id) => {
        const updatedEventList = events.filter(event => event.id !== id)
        setEvents(updatedEventList);
    }

    return (
        <EventContext.Provider value={{ events, addEvent, editEvent, deleteEvent }}>{children}</EventContext.Provider>
    )
}

export { EventContext, EventProvider }