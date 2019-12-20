json.extract! video, :id, :title, :description, :video_type, :duration, :maturity_rating, :year

if (video.thumbnail.attached?)
  json.thumbnail url_for(video.thumbnail)
elsif
  json.thumbnail "404 NO URL"
end

if (video.url.attached?)
  json.url url_for(video.url)
elsif
  json.url "404 NO URL"
end

if (video.logo.attached?)
  json.logo url_for(video.logo)
elsif
  json.logo "404 NO URL"
end

json.genreIds video.genres.pluck(:id)