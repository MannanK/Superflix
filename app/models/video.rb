# == Schema Information
#
# Table name: videos
#
#  id              :bigint           not null, primary key
#  title           :string           not null
#  description     :text             not null
#  video_type      :string           not null
#  duration        :integer          not null
#  maturity_rating :string           not null
#  year            :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Video < ApplicationRecord
  validates :title, :description, :video_type, :duration, :maturity_rating, :year, presence: true

  has_one_attached :url
  has_one_attached :thumbnail
  has_one_attached :logo

  has_many :video_genres
  has_many :genres,
    through: :video_genres,
    source: :genre

  has_many :list_videos,
    dependent: :destroy

  has_many :users,
    through: :list_videos,
    source: :user
end