class CreateListVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :list_videos do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false

      t.timestamps
    end

    add_index :list_videos, [:user_id, :video_id], unique: true
  end
end
