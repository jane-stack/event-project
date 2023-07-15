function AttendeeCard ({ attendee }) {

    // const deleteAttendeeClick = () => {
    //     fetch(`/events/${event.id}/attendances/${id}`, {
    //         method: "DELETE",
    //     })
    //     deleteAttendee(id)
    // }

    const statusChange = () => {
        console.log(attendee.id)
    }

    return (
        <div>
            <tbody>
                <tr>
                    <td>{attendee.user.name}</td>
                    <td>{attendee.status}</td>
                    <td>
                        <button onClick={statusChange}>CLICK</button>
                    </td>
                    </tr>
            </tbody>
        </div>
    )
}

export default AttendeeCard;