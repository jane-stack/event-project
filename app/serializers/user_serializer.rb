class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :attended_events

  def attended_events
    object.attended_events.map { |attended_events| {id: attended_events.id, name: attended_events.name, date: attended_events.date, location: attended_events.location} }
  end

end
