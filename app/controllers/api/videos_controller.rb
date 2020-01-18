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

  def shows
    genre_param = params[:query_params]
    if genre_param == "marvel" then genre_param = "Marvel" end
    if genre_param == "dc" then genre_param = "DC" end

    if genre_param == "Marvel" || genre_param == "DC"
      @videos = Genre.find_by_name(genre_param)
        .videos
        .where(video_type: "SHOW")
        .with_attached_thumbnail
        .with_attached_url
        .with_attached_logo
        .includes(:genres)
    else
      @videos = Video.where(video_type: "SHOW")
        .with_attached_url
        .with_attached_logo
        .with_attached_thumbnail
        .includes(:genres)
    end

    # elsif genre_param == "Other"
    #   @videos = Video.where(video_type: "SHOW")
    #     .with_attached_url
    #     .with_attached_logo
    #     .with_attached_thumbnail
    #     .includes(:genres)
    #     .where.not(genres: { name: ["DC"] })

    @genres = []
    @video_ids = Hash.new

    @videos.each do |video|
      @genres += video.genres
      @video_ids[video.id] = true
    end

    @genres = @genres.uniq
  end

  def movies
    genre_param = params[:query_params]

    if genre_param == "marvel" then genre_param = "Marvel" end
    if genre_param == "dc" then genre_param = "DC" end

    if genre_param == "Marvel" || genre_param == "DC"
      @videos = Genre.find_by_name(genre_param)
        .videos
        .where(video_type: "MOVIE")
        .with_attached_thumbnail
        .with_attached_url
        .with_attached_logo
        .includes(:genres)
    else
      @videos = Video.where(video_type: "MOVIE")
        .with_attached_url
        .with_attached_logo
        .with_attached_thumbnail
        .includes(:genres)
    end

    @genres = []
    @video_ids = Hash.new

    @videos.each do |video|
      @genres += video.genres
      @video_ids[video.id] = true
    end
    
    @genres = @genres.uniq
  end

  def search
    query_params = params[:query_params]

    @videos = Video.where("translate(title, ':-', '') ILIKE ?", "#{query_params}%")
      .with_attached_thumbnail
      .with_attached_url
      .with_attached_logo
      .includes(:genres)

    @videos += Video.where("translate(title, ':-', '') ILIKE ?", "%#{query_params}%")
      .with_attached_thumbnail
      .with_attached_url
      .with_attached_logo
      .includes(:genres)
      .uniq

    genre = query_params[0].upcase + query_params[1..-1].downcase
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

    if query_params.to_i.to_s == query_params
      @videos += Video.where("year = ?", "#{query_params}")
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
