json.extract! genre, :id, :name
json.mediaIds genre.videos.pluck(:id)