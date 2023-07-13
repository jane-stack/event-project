class Attendance < ApplicationRecord
  belongs_to :user
  belongs_to :event

  enum status: { attending: 'attending', canceled: 'canceled' }

  validates :status, inclusion: { in: %w[attending canceled], allow_nil: true }
end
