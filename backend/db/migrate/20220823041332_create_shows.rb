class CreateShows < ActiveRecord::Migration[6.1]
  def change
    create_table :shows do |t|
      t.string :show_name
      t.datetime :show_time
      t.string :musician
      t.integer :tickets_left
    end
  end
end
