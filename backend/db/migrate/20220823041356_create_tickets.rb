class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.integer :price
      t.integer :show_id
      t.integer :user_id
      t.integer :party_size
    end
  end
end
