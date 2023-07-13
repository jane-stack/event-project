class AttendanceSerializer < ActiveModel::Serializer
  attributes :id, :event, :user, :status

  def event
    {
      id: object.event.id,
      name: object.event.name,
      date: object.event.date,
      location: object.event.location,
    }
  end

  def user
    {
      id: object.user.id,
      name: object.user.name,
    }
  end

end
