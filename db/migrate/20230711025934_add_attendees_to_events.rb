class AddAttendeesToEvents < ActiveRecord::Migration[7.0]
  def change
    add_reference :events, :attendees, foreign_key: {to_table: :users}
  end
end
