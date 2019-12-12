class CreateVideoGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :video_genres do |t|
      t.integer :video_id, null: false, index: true
      t.integer :genre_id, null: false, index: true

      t.timestamps
    end
  end
end
