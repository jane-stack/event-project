class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :date
      t.string :location

      t.timestamps
    end
  end
end
