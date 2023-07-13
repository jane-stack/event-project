class AttendanceSerializer < ActiveModel::Serializer
  attributes :id, :user, :status

  def user
    {
      id: object.user.id,
      name: object.user.name,
    }
  end

end
