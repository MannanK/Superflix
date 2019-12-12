json.videos do
  @videos.each do |video|
    json.set! video.id do
      json.partial! 'api/videos/video', video: video
    end
  end
end

json.genres do
  @genres.each do |genre|
    json.set! genre.id do
      json.partial! 'api/videos/genre', genre: genre
    end
  end
end