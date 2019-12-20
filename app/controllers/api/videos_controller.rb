class Api::VideosController < ApplicationController
  def index
    @videos = Video.all
      .with_attached_thumbnail
      .with_attached_url
      .includes(:genres)

    @genres = Genre.all.includes(:videos)

    render :index
  end

  def show
    @video = Video.with_attached_thumbnail
      .with_attached_url
      .find(params[:id])

    @genres = Genre.all.includes(:videos)
  end

  def search
    queryParams = params[:query_params]

    @videos = Video.where("translate(title, ':-', '') ILIKE ?", "#{queryParams}%")
      .with_attached_thumbnail
      .with_attached_url
      .includes(:genres)

    if @videos.length < 15
      @videos += Video.where("translate(title, ':-', '') ILIKE ?", "%#{queryParams}%")
        .with_attached_thumbnail
        .with_attached_url
        .includes(:genres)
        .uniq

      if @videos.length < 30 && queryParams.to_i.to_s == queryParams
        @videos += Video.where("year = ?", "#{queryParams}")
          .with_attached_thumbnail
          .with_attached_url
          .includes(:genres)
          .uniq
      end
    end

    @genres = Genre.all.includes(:videos)

    if !@videos.empty?
      render :index
    else
      render json: ['No videos found'], status: 404
    end
  end
end
