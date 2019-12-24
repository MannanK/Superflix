class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
      .with_attached_thumbnail
      .with_attached_url
      .with_attached_logo
      .includes(:genres)

    @genres = Genre.all.includes(:videos)

    render :index
  end

  def show
    @video = Video.with_attached_thumbnail
      .with_attached_url
      .with_attached_logo
      .find(params[:id])

    @genres = Genre.all.includes(:videos)
  end

  def search
    queryParams = params[:query_params]

    @videos = Video.where("translate(title, ':-', '') ILIKE ?", "#{queryParams}%")
      .with_attached_thumbnail
      .with_attached_url
      .with_attached_logo
      .includes(:genres)

    @videos += Video.where("translate(title, ':-', '') ILIKE ?", "%#{queryParams}%")
      .with_attached_thumbnail
      .with_attached_url
      .with_attached_logo
      .includes(:genres)
      .uniq

    genre = queryParams[0].upcase + queryParams[1..-1].downcase
    if genre == "Dc" then genre = "DC" end
    if genre == "Sci-fi" then genre = "Sci-Fi" end
    if Genre.find_by_name(genre)
      @videos += Genre.find_by_name(genre)
      .videos
      .with_attached_thumbnail
      .with_attached_url
      .with_attached_logo
      .includes(:genres)
      .uniq
    end

    if queryParams.to_i.to_s == queryParams
      @videos += Video.where("year = ?", "#{queryParams}")
        .with_attached_thumbnail
        .with_attached_url
        .with_attached_logo
        .includes(:genres)
        .uniq
    end

    @genres = Genre.all.includes(:videos)

    if !@videos.empty?
      render :index
    else
      render json: ['No videos found'], status: 404
    end
  end
end
