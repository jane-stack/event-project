class Event < ApplicationRecord
    belongs_to :organizer, class_name: "User"
    has_many :attendances, dependent: :destroy
    has_many :attendees, through: :attendances, source: :user

    validates :name, :date, :location, presence: true

    def self.events_in_month(month)
        Event.where("EXTRACT(month from date) = ?", month)
    end
end
