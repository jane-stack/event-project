import { useContext, useState } from "react";
import Errors from "../errors/Errors";
import { ErrorContext } from "../context/ErrorContext";
import { EventContext } from "../context/EventContext";
import { useNavigate, useParams } from "react-router-dom";

function EventEditForm () {
    const { setErrors } = useContext(ErrorContext);
    const { events, editEvent } = useContext(EventContext);
    const id = parseInt(useParams().id);
    const event = events.find(event => event.id === id);
    const initialState = {
        name: event.name,
        date: event.date,
        location: event.location
    }
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/events/${event.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            if (data.errors) {
                setErrors(data.errors)
            } else {
                editEvent(data)
                setErrors([])
            }
        })
        .then(navigate('/events'))
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <h2>Make Changes to Your Events</h2>
            <div className="new-post">
            Event Name &nbsp;
            <input className="post-input" type="text" name="name" id="name" value={ formData.name } onChange={ handleChange }/>
            Event Date &nbsp;
            <input className="post-input" type="text" name="date" id="date" value={ formData.date } onChange={ handleChange }/>
            Event Location &nbsp;
            <input className="post-input" type="text" name="location" id="location" value={ formData.location } onChange={ handleChange }/>
            <br />
            <button type="submit" className="contact-btn">POST</button>
            </div>
            <Errors/>
        </form>
    )
}

export default EventEditForm;