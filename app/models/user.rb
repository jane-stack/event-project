class User < ApplicationRecord
    has_secure_password
    has_many :organized_events, foreign_key: "organizer_id", class_name: "Event"
    has_many :attendances
    has_many :attended_events, through: :attendances, source: :event
end
