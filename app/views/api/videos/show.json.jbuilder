json.video do
  json.partial! 'api/videos/video', video: @video
end

json.genres do
  @genres.each do |genre|
    json.set! genre.id do
      json.partial! 'api/videos/genre', genre: genre
    end
  end
end