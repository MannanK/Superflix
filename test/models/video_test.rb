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

require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
