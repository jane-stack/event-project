class AttendanceSerializer < ActiveModel::Serializer
  attributes :id, :user
  # has_one :user
  # has_one :event
  
end
