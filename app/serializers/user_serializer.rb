class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :attended_events, :organized_events

  def attended_events
    object.attended_events.map { |attended_events| {id: attended_events.id, name: attended_events.name, date: attended_events.date, location: attended_events.location} }
  end

  def organized_events
    object.organized_events.map { |organized_events| {id: organized_events.id, name: organized_events.name, date: organized_events.date, location: organized_events.location} }
  end

end
