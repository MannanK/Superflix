json.extract! user, :id, :email
json.listVideoIds user.videos.pluck(:id)