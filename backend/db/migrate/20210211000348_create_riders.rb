class CreateRiders < ActiveRecord::Migration[6.0]
  def change
    create_table :riders do |t|
      t.string :name
      t.integer :points
      t.string :image
      t.references :country, null: false, foreign_key: true

      t.timestamps
    end
  end
end
