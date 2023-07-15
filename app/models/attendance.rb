class Attendance < ApplicationRecord
  belongs_to :user
  belongs_to :event

  enum status: { attending: 'attending', maybe: 'maybe' }

  validates :status, inclusion: { in: %w[attending maybe], allow_nil: true }
end
