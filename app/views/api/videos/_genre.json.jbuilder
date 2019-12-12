json.extract! genre, :id, :name
json.videoIds genre.videos.pluck(:id)