class AddNearestAirportToMountains < ActiveRecord::Migration[7.0]
  def change
    add_column :mountains, :nearest_airport, :string
  end
end
