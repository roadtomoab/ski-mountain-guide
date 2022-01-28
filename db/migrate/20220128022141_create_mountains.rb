class CreateMountains < ActiveRecord::Migration[7.0]
  def change
    create_table :mountains do |t|
      t.string :name
      t.string :image_url
      t.text :summary
      t.string :pass_info
      t.float :avg_snowfall
      t.string :best_for

      t.timestamps
    end
  end
end
