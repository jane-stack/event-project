class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :location, :organizer, :attendees

  def organizer
    {
      id: object.organizer.id,
      name: object.organizer.name,
    }
  end

  def attendees
    object.attendees.map { |attendee| {id: attendee.id, name: attendee.name} }
  end

  # has_many :attendances, serializer: AttendanceSerializer
end
