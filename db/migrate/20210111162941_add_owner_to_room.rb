class AddOwnerToRoom < ActiveRecord::Migration[6.0]
  def change
    add_column :rooms, :owner_id, :integer
  end
end
