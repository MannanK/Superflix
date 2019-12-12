json.genres do
  @genres.each do |genre|
    json.set! genre.id do
      json.partial! 'api/genres/genre', genre: genre
    end
  end
end