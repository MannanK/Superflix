# == Schema Information
#
# Table name: video_genres
#
#  id         :bigint           not null, primary key
#  video_id   :integer          not null
#  genre_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class VideoGenreTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
