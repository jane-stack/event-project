class Event < ApplicationRecord
    belongs_to :organizer, class_name: "User"
    has_many :attendances
    has_many :attendees, through: :attendances, source: :user
end
